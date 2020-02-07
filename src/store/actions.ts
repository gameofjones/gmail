import React from "react"
import { Label, Message } from "../models/gmail"
import { getMessages } from "../api/MailApiMock"

export const SET_LABEL = 'SET_LABEL'
export const SET_LABELS = 'SET_LABELS'
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'

interface SetLabel {
  type: typeof SET_LABEL
  payload: Label
}

interface SetMessage {
  type: typeof SET_MESSAGE
  payload: Message
}

interface SetMessages {
  type: typeof SET_MESSAGES
  payload: Message[]
}

export type ActionTypes = SetLabel | SetMessage | SetMessages

export const setLabel = (dispatch: React.Dispatch<ActionTypes>, label: Label) => {
  dispatch({ type: SET_LABEL, payload: label })
}

export const setMessage = (dispatch: React.Dispatch<ActionTypes>, message: Message) => {
  dispatch({ type: SET_MESSAGE, payload: message })
}

export const setMessages = async (dispatch: React.Dispatch<ActionTypes>, label: Label) => {
  const messages = await getMessages(label.id)
  dispatch({ type: SET_MESSAGES, payload: messages })
}
