import React from "react"
import { Label, Message } from "../models/gmail"
import MailState from "./state"

export const SET_LABEL = 'SET_LABEL'
export const SET_LABELS = 'SET_LABELS'
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const SET_STATE = 'SET_STATE'

interface SetLabel {
  type: typeof SET_LABEL
  payload: Label
}

interface SetMessage {
  type: typeof SET_MESSAGE
  payload: Message | undefined
}

interface SetMessages {
  type: typeof SET_MESSAGES
  payload: Message[]
}

interface SetState {
  type: typeof SET_STATE
  payload: MailState
}

export type ActionTypes = SetLabel | SetMessage | SetMessages | SetState

export const setLabel = (dispatch: React.Dispatch<ActionTypes>, label: Label) => {
  dispatch({ type: SET_LABEL, payload: label })
}

export const setMessage = (dispatch: React.Dispatch<ActionTypes>, message?: Message) => {
  dispatch({ type: SET_MESSAGE, payload: message })
}

export const setMessages = async (dispatch: React.Dispatch<ActionTypes>, messages: Message[]) => {
  dispatch({ type: SET_MESSAGES, payload: messages })
}

export const setState = (dispatch: React.Dispatch<ActionTypes>, mailState: MailState) => {
  dispatch({ type: SET_STATE, payload: mailState })
}
