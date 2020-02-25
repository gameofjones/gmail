import React, { FunctionComponent } from "react"
import { css } from "emotion"
import { Message } from "../models/gmail"
import { PreviewPane, EmptyState } from "."

interface ContainerProps {
  selectedMessage: Message | undefined
  messages: Message[]
}

const RightPaneContainer: FunctionComponent<ContainerProps> = ({ selectedMessage, messages }) => {
  return (
    <div className={styles.previewPanel}>
    {
      selectedMessage &&
      <PreviewPane message={selectedMessage} />
    }
    {
      !selectedMessage && 
      messages.length !== 0 &&
      <div className={styles.emptyState}>
        <EmptyState label="Select an item to read!" />
      </div>
    }
    </div>
  )
}

const appBorder = "1px solid #F4F4F4"

const styles = {
  previewPanel: css({
    flex: 1,
    color: "#585858",
    padding: "20px 20px",
    overflowY: "auto",
    borderLeft: appBorder,
  }),
  emptyState: css({
    marginTop: "10%",
  })
}

export default RightPaneContainer
