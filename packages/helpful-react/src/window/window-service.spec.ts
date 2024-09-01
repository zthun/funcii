import { IZCircusSetup } from "@zthun/cirque";
import { IZCircusReactHook, ZCircusSetupHook } from "@zthun/cirque-du-react";
import { afterEach, describe, expect, it } from "vitest";
import { useWindowService } from "./window-service.mjs";

describe("useWindowService", () => {
  let _hook: IZCircusReactHook<any, any>;
  let _setup: IZCircusSetup<IZCircusReactHook<any, any>>;

  async function createTestTarget() {
    _setup = new ZCircusSetupHook(() => useWindowService());
    _hook = await _setup.setup();
    return _hook;
  }

  afterEach(async () => {
    await _hook?.destroy?.call(_hook);
    await _setup?.destroy?.call(_setup);
  });

  it("should return the global object by default", async () => {
    // Arrange.
    const target = await createTestTarget();
    // Act.
    const actual = await target.current();
    // Assert.
    expect(actual).toEqual(global);
  });
});
