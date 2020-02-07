export interface Label {
  id: string
  name: string
  type: string
  messagesUnread: number
  color?: {
    backgroundColor: string
  }
}

export interface MessagePartHeader {
  name?: string
  value?: string
}

interface MessagePart {
  headers?: MessagePartHeader[]
  parts?: MessagePart[]
}

export interface Message {
  id?: string
  labelIds?: string[];
  payload?: MessagePart;
}
