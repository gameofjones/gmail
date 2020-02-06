import React from "react"
import { Label, Email } from "../models/gmail"
import { getMessages } from "../api/MailApiMock"

export const SET_LABEL = 'SET_LABEL'
export const SET_LABELS = 'SET_LABELS'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_EMAILS = 'SET_EMAILS'

interface SetLabel {
  type: typeof SET_LABEL
  payload: Label
}

interface SetLabels {
  type: typeof SET_LABELS
  payload: Label[]
}

interface SetEmail {
  type: typeof SET_EMAIL
  payload: Email
}

interface SetEmails {
  type: typeof SET_EMAILS
  payload: Email[]
}

export type ActionTypes = SetLabel | SetLabels | SetEmail | SetEmails

export const setLabel = (dispatch: React.Dispatch<ActionTypes>, label: Label) => {
  dispatch({ type: SET_LABEL, payload: label })
}

export const setLabels = (dispatch: React.Dispatch<ActionTypes>, labels: Label[]) => {
  dispatch({ type: SET_LABELS, payload: labels })
}

export const setEmail = (dispatch: React.Dispatch<ActionTypes>, email: Email) => {
  dispatch({ type: SET_EMAIL, payload: email })
}

export const setEmails = async (dispatch: React.Dispatch<ActionTypes>, label: Label) => {
  const emails = await getMessages(label.id)
  dispatch({ type: SET_EMAILS, payload: emails })
}
