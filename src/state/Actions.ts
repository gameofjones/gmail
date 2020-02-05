import { Label, Email } from "../models/gmail"

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
