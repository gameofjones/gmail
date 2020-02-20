import React, { FunctionComponent, useState, useEffect } from "react"
import { Typography } from "./MaterialUI"
import Buffer from "./Buffer"
import { Message, MessagePartHeader } from "../models/gmail"
import ReactHtmlParser from "react-html-parser"

const HEADERS = {
  SUBJECT: "subject",
  FROM: "from",
  DATE: "date",
  TO: "to",
}

interface PreviewPanelProps {
  message: Message
}

const PreviewPane: FunctionComponent<PreviewPanelProps> = ({  message }) => {
  const [subject, setSubject] = useState("")
  const [from, setFrom] = useState("")
  const [date, setDate] = useState("")
  const [tos, setTos] = useState<MessagePartHeader[]>([])

  useEffect(()=> {
    if (message.payload) {
      const { headers } = message.payload

      const getHeaderValue = (name: string) => {
        if (!headers) return undefined
        const header = headers.find(header => header.name === name)
      
        if (!header) return undefined
        return header.value
      }

      const subject = getHeaderValue(HEADERS.SUBJECT)
      const from = getHeaderValue(HEADERS.FROM)
      const date = getHeaderValue(HEADERS.DATE)
      let tos: MessagePartHeader[] = []

      if (headers) {
        tos = headers.filter(header => header.name === HEADERS.TO)
        setTos(tos)
      }

      if (subject) setSubject(subject)
      if (from) setFrom(from)
      if (date) setDate(date)
    }
  },[message.payload])

  return (
    <>
      <Typography variant="h5" gutterBottom>{subject}</Typography>
      <Typography variant="caption" gutterBottom>{from}</Typography>
      <br></br>
      <Typography variant="caption" gutterBottom>
      {
        tos.map((to, index) => {
          return (
            <span key={index}>{to.value}; </span>
          )
        })
      }
      <Typography variant="caption" display="block" gutterBottom>
        {date}
      </Typography>
      </Typography>
      <Buffer height={10} />
      <div>
        {
          message.payload && 
          message.payload.body && 
          message.payload.body.data && 
          ReactHtmlParser(atob(message.payload.body.data)) 
        }
      </div>
    </>
  )
}

export default PreviewPane
