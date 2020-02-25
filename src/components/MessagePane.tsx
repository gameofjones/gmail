import React, { FunctionComponent } from "react"
import { css } from "emotion"
import { Label, Message } from "../models/gmail"
import { MessageComponent, EmptyState } from "."

interface PaneProps {
  selectedLabel: Label
  selectedMessage: Message | undefined
  messages: Message[]
}

const MessagePane: FunctionComponent<PaneProps> = ({ selectedLabel, selectedMessage, messages }) => {
  return (
    <div className={styles.messagePane}>
    {
      messages.map((message: Message, index: number) =>  {
        return ( 
          <MessageComponent
            key={index}
            index={index}
            message={message}
            isSelected={message.id === selectedMessage?.id }
          />
        )}
      )
    }
    {
      messages.length === 0 &&
      <EmptyState label={`Nothing in ${selectedLabel.name}!`} />
    }
  </div>
  )
}

const styles = {
  messagePane: css({
    flex: "0 400px",
    overflowY: "auto",
    borderLeft: "1px solid #F4F4F4",
  }),
}

export default MessagePane
