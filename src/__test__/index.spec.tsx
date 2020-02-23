import React from "react";
import { Machine } from "xstate";
import { createModel } from "@xstate/test";
import { toggleMachine } from "../toggleMachine";

const toggleModel = createModel(toggleMachine).withEvents({
  TOGGLE: {
    exec: async testContext => {
      // await page.click('input');
    }
  }
});

describe("toggle", () => {
  const testPlans = toggleModel.getShortestPathPlans({
    filter: state => state.context.count < 3
  });

  testPlans.forEach(plan => {
    describe(plan.description, () => {
      plan.paths.forEach(path => {
        it(path.description, async () => {
          // do any setup, then...
          // await path.test(page);
        });
      });
    });
  });

  it("should have full coverage", () => {
    return toggleModel.testCoverage();
  });
});
