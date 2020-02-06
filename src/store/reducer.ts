import { ActionTypes, SET_LABEL, SET_LABELS, SET_EMAIL, SET_EMAILS } from "./actions"
import MailState from "./state"

const mailReducer = (state: MailState, action: ActionTypes): MailState => {
  switch (action.type) {
    case SET_LABEL:
      return { ...state, selectedLabel: action.payload }
    case SET_LABELS:
      // note: this is probably not needed in the store
      return { ...state, labels: action.payload }
    case SET_EMAIL:
      return { ...state, selectedEmail: action.payload }
    case SET_EMAILS:
      return { ...state, emails: action.payload }
    default:
      return state
  }
}

export default mailReducer
