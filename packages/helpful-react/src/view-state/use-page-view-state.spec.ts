// @vitest-environment jsdom

import { ZCircusSetupHook } from '@zthun/cirque-du-react';
import { sleep } from '@zthun/helpful-fn';
import {
  IZDataRequest,
  IZDataSource,
  ZDataRequestBuilder,
  ZDataSourceStatic,
  ZDataSourceStaticOptionsBuilder
} from '@zthun/helpful-query';
import { range } from 'lodash-es';
import { beforeEach, describe, expect, it } from 'vitest';
import { isStateLoading } from '../async-state/use-async-state';
import { usePageViewState } from './use-page-view-state';

describe('usePageViewState', () => {
  let source: IZDataSource<number>;
  let request: IZDataRequest;

  const createTestTarget = async () => {
    const target = await new ZCircusSetupHook(() => usePageViewState(source, request)).setup();
    await sleep(100);
    await target.rerender();
    return target;
  };

  beforeEach(() => {
    request = new ZDataRequestBuilder().page(2).size(20).build();
  });

  describe('Loading', () => {
    beforeEach(() => {
      source = new ZDataSourceStatic<number>([], new ZDataSourceStaticOptionsBuilder().delay(500).build());
    });

    it('should start loading the view', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { view } = await target.current();
      const actual = isStateLoading(view);
      // Assert.
      expect(actual).toBeTruthy();
    });

    it('should start loading the count', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { count } = await target.current();
      const actual = isStateLoading(count);
      // Assert.
      expect(actual).toBeTruthy();
    });
  });

  describe('Success', () => {
    let data: number[];

    beforeEach(() => {
      data = range(0, 101);
      source = new ZDataSourceStatic(data);
    });

    it('should return the given view page', async () => {
      // Arrange.
      const expected = data.slice(20, 40);
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });

    it('should load all the data if the page size is not specified', async () => {
      // Arrange.
      request = new ZDataRequestBuilder().build();
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(data);
    });

    it('should return the given count', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { count: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(data.length);
    });

    it('should calculate the total number of pages', async () => {
      // Arrange.
      const expected = 6;
      const target = await createTestTarget();
      // Act.
      const { pages: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(expected);
    });
  });

  describe('Error', () => {
    beforeEach(() => {
      source = new ZDataSourceStatic(new Error('Failed to load data'));
    });

    it('should set an error for the view', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { view: actual } = await target.current();
      // Assert.
      expect(actual).toBeInstanceOf(Error);
    });

    it('should set an error for the count', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { count: actual } = await target.current();
      // Assert.
      expect(actual).toBeInstanceOf(Error);
    });

    it('should set the total number of pages to 1', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { pages: actual } = await target.current();
      // Assert.
      expect(actual).toEqual(1);
    });
  });
});
