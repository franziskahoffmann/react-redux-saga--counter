import { ActionType } from "../action-types/index"


interface ResetAction {
    type: ActionType.RESET
}

interface StartAction {
    type: ActionType.START
}

interface PauseAction {
    type: ActionType.PAUSE
}

interface IncrementAction {
    type: ActionType.INCREMENT
}


export  type Action = ResetAction | StartAction | PauseAction|IncrementAction;