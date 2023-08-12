// @vitest-environment jsdom

import { ZCircusSetupHook } from '@zthun/cirque-du-react';
import { describe, expect, it } from 'vitest';
import { useWindowService } from './window-service';

describe('useWindowService', () => {
  function createTestTarget() {
    return new ZCircusSetupHook(() => useWindowService()).setup();
  }

  it('should return the global object by default', async () => {
    // Arrange.
    const target = await createTestTarget();
    // Act.
    const actual = await target.current();
    // Assert.
    expect(actual).toEqual(global);
  });
});
