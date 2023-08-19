// @vitest-environment jsdom

import { ZCircusSetupHook } from '@zthun/cirque-du-react';
import { sleep } from '@zthun/helpful-fn';
import { get, noop } from 'lodash';
import React, { StrictMode } from 'react';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  ZAsyncLoading,
  asStateData,
  asStateError,
  isStateErrored,
  isStateLoaded,
  isStateLoading,
  useAsyncState
} from './use-async-state';

describe('useAsyncState', () => {
  let load: Mock;

  async function createTestTarget() {
    const wrapper = ({ children }) => <StrictMode>{children}</StrictMode>;
    const target = await new ZCircusSetupHook(() => useAsyncState<string>(load), { wrapper }).setup();
    await sleep(5);
    return target;
  }

  function mockLoadedData(data: string) {
    load.mockResolvedValue(data);
  }

  function mockErrorData(message: string | Error | { message: string }) {
    load.mockRejectedValue(message);
  }

  function mockLoadingData() {
    load.mockReturnValue(new Promise(noop));
  }

  beforeEach(() => {
    load = vi.fn();
  });

  describe('Success', () => {
    it('should return the data.', async () => {
      // Arrange.
      const expected = 'OK';
      mockLoadedData(expected);
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoaded(actual)).toBeTruthy();
      expect(asStateData(actual)).toEqual(expected);
    });

    it('should set the correct value in the case the component is unloaded and reloaded', async () => {
      // Arrange.
      const expected = 'good';
      load.mockImplementationOnce(() => sleep(300, 'bad')).mockImplementationOnce(() => sleep(0, expected));
      const target = await createTestTarget();
      // Act.
      await target.rerender();
      await sleep(500);
      const [actual] = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should set the correct value in the case that a later refresh is invoked', async () => {
      // Arrange.
      const expected = 'good';
      load
        .mockImplementationOnce(() => sleep(300, 'bad'))
        .mockImplementationOnce(() => sleep(100, 'bad'))
        .mockImplementationOnce(() => sleep(0, expected));
      const target = await createTestTarget();
      // Act.
      const [, refresh] = await target.rerender();
      await refresh();
      await sleep(500);
      const [actual] = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should not return data that has failed to load.', async () => {
      // Arrange.
      mockErrorData('Something went wrong');
      const target = await createTestTarget();
      // Acct.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoaded(actual)).toBeFalsy();
      expect(asStateData(actual)).toBeUndefined();
    });

    it('should return fallback data if the data has failed to load.', async () => {
      // Arrange.
      mockErrorData('Something went wrong');
      const target = await createTestTarget();
      const expected = 'Fallback';
      // Acct.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoaded(actual)).toBeFalsy();
      expect(asStateData(actual, expected)).toEqual(expected);
    });

    it('should not return data that is loading.', async () => {
      // Arrange.
      mockLoadingData();
      const target = await createTestTarget();
      // Acct.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoaded(actual)).toBeFalsy();
      expect(asStateData(actual)).toBeUndefined();
    });
  });

  describe('Error', () => {
    it('should return an error object.', async () => {
      // Arrange.
      const expected = { message: 'Something went wrong' };
      mockErrorData(expected);
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert
      expect(isStateErrored(actual)).toBeTruthy();
      expect(asStateError(actual)?.message).toEqual(expected.message);
    });

    it('should keep the error in the case that an error is already provided.', async () => {
      // Arrange.
      const expected = 'Something went wrong';
      mockErrorData(new Error(expected));
      const target = await createTestTarget();
      // Act.
      const [value] = await target.rerender();
      const actual = get(value, 'message');
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should not return errors on loaded data.', async () => {
      // Arrange.
      mockLoadedData('OK');
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateErrored(actual)).toBeFalsy();
      expect(asStateError(actual)).toBeUndefined();
    });

    it('should not return errors on loading data.', async () => {
      // Arrange.
      mockLoadingData();
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateErrored(actual)).toBeFalsy();
      expect(asStateError(actual)).toBeUndefined();
    });
  });

  describe('Loading', () => {
    it('should return the loading symbol', async () => {
      // Arrange.
      mockLoadingData();
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoading(actual)).toBeTruthy();
      expect(actual).toEqual(ZAsyncLoading);
    });

    it('should not return the loading symbol on loaded data.', async () => {
      // Arrange.
      mockLoadedData('OK');
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoading(actual)).toBeFalsy();
      expect(actual).not.toEqual(ZAsyncLoading);
    });

    it('should not return the loading symbol on errored data.', async () => {
      // Arrange.
      mockErrorData('Some error happened');
      const target = await createTestTarget();
      // Act.
      const [actual] = await target.rerender();
      // Assert.
      expect(isStateLoading(actual)).toBeFalsy();
      expect(actual).not.toEqual(ZAsyncLoading);
    });
  });

  describe('Update', () => {
    it('should reload the data when the setter is invoked with undefined', async () => {
      // Arrange
      const target = await createTestTarget();
      const [, refresh] = await target.current();
      // Act.
      load.mockClear();
      await refresh();
      await target.rerender();
      // Assert.
      expect(load).toHaveBeenCalledTimes(1);
    });

    it('should not reload data if the setter is invoked with a non undefined value', async () => {
      // Arrange
      const target = await createTestTarget();
      const [, setData] = await target.current();
      const expected = 'This should be set right away';
      // Act.
      load.mockClear();
      await setData(expected);
      const [actual] = await target.rerender();
      // Assert.
      expect(load).not.toHaveBeenCalled();
      expect(actual).toEqual(expected);
    });

    it('should reload the data based on the previous data.', async () => {
      // Arrange.
      const expected = '11';
      mockLoadedData('1');
      const target = await createTestTarget();
      const [, setData] = await target.current();
      // Act.
      await setData((curr) => curr + '1');
      const [actual] = await target.rerender();
      // Assert.
      expect(actual).toEqual(expected);
    });
  });
});
