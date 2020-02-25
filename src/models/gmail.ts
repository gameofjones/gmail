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

interface MessagePartBody {
  data?: string
}

export interface MessagePart {
  body?: MessagePartBody
  headers?: MessagePartHeader[]
  mimeType?: string
  parts?: MessagePart[]
}

export interface Message {
  id?: string
  labelIds?: string[];
  payload?: MessagePart;
}

export interface HeaderMap {
  subject?: string
  from?: string
  date?: string
  tos?: MessagePartHeader[]
}
