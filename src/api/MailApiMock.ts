import { Label, Email } from "../models/gmail"
import { Labels, Emails } from "../mocks"

const getLabels = (): Promise<Label[]> => {
  return new Promise<Label[]>((resolve, reject) => {
    resolve(Labels)
  })
}

const getMessages = (labelId: string): Promise<Email[]> => {
  return new Promise<Email[]>((resolve, reject) => {
    resolve(Emails[labelId])
  })
}

export {
  getLabels,
  getMessages,
}
