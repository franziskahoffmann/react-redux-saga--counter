import { ActionType } from "../action-types/index";
import { Action } from "../actions";

export const initStateounterReducer = {
  counter: 0,
};

function counterReducer(
  state: { counter: number } = initStateounterReducer,
  action: Action
) {
  switch (action.type) {
    case ActionType.START:
      return { counter: state.counter };
    case ActionType.INCREMENT:
      return { counter: state.counter + 1 };
    case ActionType.RESET:
      return initStateounterReducer;
    case ActionType.PAUSE:
      return { counter: state.counter };
    default:
      return state;
  }
}

export default counterReducer;
