import React, { useReducer, createContext, ReactNode } from "react"
import { Label, Email } from "../models/gmail"
import { ActionTypes, SET_LABEL, SET_LABELS, SET_EMAIL, SET_EMAILS } from "./Actions"

interface ProviderProps {
  children: ReactNode
}

interface ContextProps {
  state: MailState;
  dispatch: React.Dispatch<ActionTypes>
}

interface MailState {
  labels: Label[]
  emails: Email[],
  selectedLabel: Label,
  selectedEmail: Email,
}

let initialState: MailState = {
  labels: [],
  emails: [],
  selectedEmail: { id: "1" },
  selectedLabel: { id: "1", name: "Inbox", type: "System", messagesUnread: 3 },
}

const mailReducer = (state: MailState, action: ActionTypes): MailState => {
  switch (action.type) {
    case SET_LABEL:
      return { ...state, selectedLabel: action.payload }
    // note: this is probably not needed in the store
    case SET_LABELS:
      return { ...state, labels: action.payload }
    case SET_EMAIL:
      return { ...state, selectedEmail: action.payload }
    case SET_EMAILS:
      return { ...state, emails: action.payload }
    default:
      return state
  }
}

const MailContext = createContext({} as ContextProps)

const MailContextProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(mailReducer, initialState)

  return <MailContext.Provider value={{state, dispatch}}>{props.children}</MailContext.Provider>
}

let MailContextConsumer = MailContext.Consumer

export {
  MailContext,
  MailContextProvider,
  MailContextConsumer
}
