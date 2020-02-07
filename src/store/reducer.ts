import { ActionTypes, SET_LABEL, SET_MESSAGE, SET_MESSAGES } from "./actions"
import MailState from "./state"

const mailReducer = (state: MailState, action: ActionTypes): MailState => {
  switch (action.type) {
    case SET_LABEL:
      return { ...state, selectedLabel: action.payload }
    case SET_MESSAGE:
      return { ...state, selectedMessage: action.payload }
    case SET_MESSAGES:
      return { ...state, messages: action.payload }
    default:
      return state
  }
}

export default mailReducer
