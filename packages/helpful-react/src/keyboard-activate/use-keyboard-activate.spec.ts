// @vitest-environment jsdom

import { ZCircusKeyboardQwerty } from '@zthun/cirque';
import { ZCircusSetupHook } from '@zthun/cirque-du-react';
import { KeyboardEvent } from 'react';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';
import { useKeyboardActivate } from './use-keyboard-activate.mjs';

describe('useKeyboardActivate', () => {
  let callback: Mock | undefined;
  let codes: string[] | undefined;

  async function createTestTarget() {
    return await new ZCircusSetupHook(() => useKeyboardActivate(callback, codes)).setup();
  }

  beforeEach(() => {
    callback = undefined;
    codes = undefined;
  });

  describe('With', () => {
    beforeEach(() => {
      callback = vi.fn();
    });

    async function shouldInvokeCallbackWhenAKeyIsPressed(code: string) {
      // Arrange.
      const e = { code } as KeyboardEvent<Element>;
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      onKey!(e);
      // Assert.
      expect(callback).toHaveBeenCalledWith(e);
    }

    it('should invoke the callback handler when Enter is pressed', async () => {
      await shouldInvokeCallbackWhenAKeyIsPressed(ZCircusKeyboardQwerty.enter.code);
    });

    it('should invoke the callback handler when Space is pressed.', async () => {
      await shouldInvokeCallbackWhenAKeyIsPressed(ZCircusKeyboardQwerty.space.code);
    });

    it('should invoke the callback handler when a specific key is pressed.', async () => {
      codes = [ZCircusKeyboardQwerty.comma.code];
      await shouldInvokeCallbackWhenAKeyIsPressed(ZCircusKeyboardQwerty.comma.code);
    });

    it('should not invoke the callback if a key is pressed that is not in the list of codes.', async () => {
      // Arrange.
      const e = { code: ZCircusKeyboardQwerty.altLeft.code } as KeyboardEvent<Element>;
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      onKey!(e);
      // Assert.
      expect(callback).not.toHaveBeenCalled();
    });

    it('should return 0 for the tabIndex', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { tabIndex } = await target.current();
      // Assert.
      expect(tabIndex).toEqual(0);
    });
  });

  describe('Without', () => {
    it('should return undefined for the tabIndex.', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { tabIndex } = await target.current();
      // Assert.
      expect(tabIndex).toBeUndefined();
    });

    it('should return undefined for the onKey proxy.', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const { onKey } = await target.current();
      // Assert.
      expect(onKey).toBeUndefined();
    });
  });
});
