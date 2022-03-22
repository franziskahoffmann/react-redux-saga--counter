import { useAppSelector } from "./hooks";
import { action } from "./store";
import { ActionType } from "./state/action-types";

export const SagaCounter = () => {
  const counter = useAppSelector((state) => {
    return state.counter.counter;
  });
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div></div>
      <button onClick={() => action(ActionType.START)}>START</button>{" "}
      <button onClick={() => action(ActionType.RESET)}>RESET</button>{" "}
      <button onClick={() => action(ActionType.PAUSE)}>PAUSE</button>
    </div>
  );
};
