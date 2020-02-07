import { Label, Message } from "../models/gmail"
import { Labels, Messages } from "../mocks"

const getLabels = (): Promise<Label[]> => {
  return new Promise<Label[]>((resolve, reject) => {
    resolve(Labels)
  })
}

const getMessages = (labelId: string): Promise<Message[]> => {
  return new Promise<Message[]>((resolve, reject) => {
    resolve(Messages[labelId])
  })
}

export {
  getLabels,
  getMessages,
}
