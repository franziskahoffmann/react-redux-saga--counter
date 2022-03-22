import {
  all,
  call,
  fork,
  race,
  take
} from "redux-saga/effects";
import { action, RootState } from "./store";
import { ActionType } from "./state/action-types";
const delay = (ms: number | undefined) =>
  new Promise((res) => setTimeout(res, ms));

function* workingSagaCounter() {
  while (true) {
    yield delay(1000);
    yield action(ActionType.INCREMENT);
  }
}
function* watchStartSagaCounter() {
  while (true) {
    yield take(ActionType.START);
    yield race({
      response: call(workingSagaCounter),
      cancel: take([ActionType.RESET, ActionType.PAUSE]),
    });
  }
}

function* rootSaga() {
  yield all([fork(watchStartSagaCounter)]);
}

export default rootSaga;
