import { MessagePartHeader, HeaderMap } from "../models/gmail"

const HEADERS = {
  SUBJECT: "subject",
  FROM: "from",
  DATE: "date",
  TO: "to",
}

const mapHeaders = (headers?: MessagePartHeader[]): HeaderMap | undefined => {
  if (!headers) return undefined

  const getHeaderValue = (name: string) => {
    const header = headers.find(header => header.name === name)
  
    if (!header) return undefined
    return header.value
  }

  return {
    subject: getHeaderValue(HEADERS.SUBJECT),
    from: getHeaderValue(HEADERS.FROM),
    date: getHeaderValue(HEADERS.DATE),
    tos: headers.filter(header => header.name === HEADERS.TO)
  }
}

export default mapHeaders
