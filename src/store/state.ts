import { Label, Email } from "../models/gmail"

export default interface MailState {
  labels: Label[]
  emails: Email[],
  selectedLabel: Label,
  selectedEmail: Email,
}