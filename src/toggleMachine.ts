import { Machine, assign } from "xstate";

interface ToggleSchema {
  states: {
    active: {};
    inactive: {};
  };
}

interface ToggleContext {
  count: number;
}

export const toggleMachine = Machine<ToggleContext, ToggleSchema>({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      entry: assign({ count: ctx => ctx.count + 1 }),
      on: { TOGGLE: "inactive" }
    }
  }
});
