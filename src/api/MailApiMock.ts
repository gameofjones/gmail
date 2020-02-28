import { Label, Message } from "../models/gmail"
import { labels, messages } from "../mocks"

const getLabels = (): Promise<Label[]> => {
  return new Promise<Label[]>((resolve, reject) => {
    resolve(labels)
  })
}

const getMessagesByLabelId = (labelId: string): Promise<Message[]> => {
  return new Promise<Message[]>((resolve, reject) => {
    resolve(messages[labelId])
  })
}

const getAllMessages = (): Message[] => {
  let allMessages: Message[] = []

  Object.keys(messages).forEach(key => {
    allMessages = [...allMessages, ...(messages[key])]
  });

  return allMessages
}

const queryMessages = (query: string): Promise<Message[]> => {
  const allMessages = getAllMessages()
  const q = query.toLocaleLowerCase()
  const filtered = allMessages.filter(messages => {
    if (messages.payload && messages.payload.headers) {
      const { payload: { headers }} = messages
      return headers.findIndex(header => (header.value && header.value.toLowerCase().includes(q)) || false) > -1
    }

    return false
  })

  return new Promise<Message[]>((resolve, reject) => {
    resolve(filtered)
  })
}

export {
  getLabels,
  getMessagesByLabelId,
  getAllMessages,
  queryMessages,
}
