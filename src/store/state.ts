import { Label, Message } from "../models/gmail"

export default interface MailState {
  labels: Label[]
  messages: Message[],
  selectedLabel: Label,
  selectedMessage: Message,
}