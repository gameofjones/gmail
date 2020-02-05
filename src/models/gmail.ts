export interface Label {
  id: string
  name: string
  type: string
  messagesUnread: number
  color?: {
    backgroundColor: string
  }
}

export interface Email {
  id: string,
  threadId?: string,
  labelIds?: string[],
  payload?: {
    partId: string,
    mimeType: string,
    filename: string,
    // todo: change to Resource later
    body: boolean,
    // need parts
  },
}