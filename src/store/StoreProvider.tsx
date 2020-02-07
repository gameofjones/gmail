import React, { useReducer, createContext, ReactNode } from "react"
import { ActionTypes } from "./actions"
import MailState from "./state"
import mailReducer from "./reducer"

interface ProviderProps {
  children: ReactNode
}

interface ContextProps {
  state: MailState;
  dispatch: React.Dispatch<ActionTypes>
}

let initialState: MailState = {
  labels: [
    {
      id: "1",
      name: "Inbox",
      type: "System",
      messagesUnread: 3,
    },
    {
      id: "2",
      name: "Snoozed",
      type: "System",
      messagesUnread: 0,
    },
  ],
  messages: [],
  selectedMessage: {},
  selectedLabel: { id: "1", name: "Inbox", type: "System", messagesUnread: 3 },
}

const MailContext = createContext({ state: initialState } as ContextProps)

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
