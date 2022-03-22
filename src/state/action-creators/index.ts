import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const startClock = (counter: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.START,
        })
    }
}
