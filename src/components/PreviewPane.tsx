import React, { FunctionComponent, useState, useEffect } from "react"
import { Typography } from "./MaterialUI"
import Buffer from "./Buffer"
import { Message, HeaderMap } from "../models/gmail"
import { mapHeaders } from "../tools"
import ReactHtmlParser from "react-html-parser"
import { css } from "emotion";

interface PreviewPanelProps {
  message: Message
}

const PreviewPane: FunctionComponent<PreviewPanelProps> = ({  message }) => {
  const [headerMap, setHeaderMap] = useState<HeaderMap>()

  useEffect(()=> {
    if (message.payload) {
      const { headers } = message.payload
      const headerMap: HeaderMap | undefined = mapHeaders(headers)
      setHeaderMap(headerMap)
    }
  },[message.payload])

  return (
    <div className={styles.card}>
        {
          headerMap &&
          <>
          <Typography variant="h5" gutterBottom>{headerMap.subject}</Typography>
          <Typography variant="caption" gutterBottom>{headerMap.from}</Typography>
          <br></br>
          <Typography variant="caption" gutterBottom>
          {
            headerMap.tos &&
            headerMap.tos.map((to, index) => {
              return (
                <span key={index}>{to.value}; </span>
              )
            })
          }
          <Typography variant="caption" display="block" gutterBottom>
            {headerMap.date}
          </Typography>
          </Typography>
          <Buffer height={10} />
          </>
        }
        <div>
          {
            message.payload && 
            message.payload.body && 
            message.payload.body.data && 
            ReactHtmlParser(atob(message.payload.body.data)) 
          }
        </div>
      </div>
  )
}

const styles = {
  card: css({
    borderBottom: "1px solid #f4f4f4",
    padding: "20px",
  })
}

export default PreviewPane
