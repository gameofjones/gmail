import 'typeface-roboto'
import React, { useState, useContext, FunctionComponent, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import Input from '@material-ui/core/Input'
import SearchIcon from "@material-ui/icons/Search"
import InputAdornment from '@material-ui/core/InputAdornment'
import Avatar from "@material-ui/core/Avatar"
import { css } from "emotion"
import { Logo, LabelPanel, EmailTab, PreviewPanel } from "."
import { MailContextProvider, MailContext } from "../state/MailContext"
import { Label, Email } from "../models/gmail"
import { getLabels, getMessages } from "../api/MailApiMock"
import { SET_EMAILS } from "../state/Actions"

const mockEmails = [
  {
    subject: "First Email",
    sender: "author@gmail.com",
    sent: "8:08 AM"
  },
  {
    subject: "Second Email with a longer name ya'llvgvggggggggg",
    sender: "Kiah Jones",
    sent: "Fri 3:20 PM"
  },
  {
    subject: "Third Email",
    sender: "Deep Badesha",
    sent: "Fri 3:20 PM"
  },
]

const AppComponent: FunctionComponent = () => {
  let { state, dispatch } = useContext(MailContext)
  const { selectedLabel, emails } = state
  const [labels, setLabels] = useState<Label[]>([])
  const setEmails = (emails: Email[]) => dispatch({ type: SET_EMAILS, payload: emails })

  useAsyncEffect(async () => {
    const labels = await getLabels()
    const messages = await getMessages(selectedLabel.id)

    setLabels(labels)
    setEmails(messages)
  }, [])

  useEffect(() => {
    console.log(state.emails)
  })

  return (
    <MailContextProvider>
      <>
        <div className={styles.header}>
          <Logo />
          <div className={styles.headerRight}>
            <Avatar className={styles.avatar}>SM</Avatar>
          </div>
        </div>
        <div className={styles.toolbar}>
          <Input
            id="standard-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#2979FF" }}/>
              </InputAdornment>
            }
          />
        </div>
        <div className={styles.panelContainer}> 
          <LabelPanel labels={labels} />
          <div className={styles.emailPanel}>
            {
              emails.map((email: Email, index: number) => 
                <EmailTab
                  key={index}
                  index={index}
                  subject={`Email: ${email.id}`}
                  sender={"author@gmail.com"}
                  sent={"Fri 3:20 PM"}
                />
              )
            }
          </div>
          <PreviewPanel
            sender={"Kiah Jones"}
            recipients={["Madhu Rawat", "Deep Badesha"]}
            subject={"First Email"}
            body={""}
          />
        </div>
      </>
    </MailContextProvider>
  )
}

const appBorder = "2px solid #F4F4F4"

const styles = {
  header: css({
    display: "flex",
  }),
  headerRight: css({
    paddingRight: "30px",
    alignItems: "center",
    display: "flex",
  }),
  headerLeft: css({
    flex: 1,
  }),
  avatar: css({
    marginLeft: "auto",
    alignItems: "center",
    background: "green !important",
    cursor: "pointer",
  }),
  toolbar: css({
    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px 0",
    backgroundColor: "#FCFCFA",
    color: "#2962FF",
    border: appBorder,
  }),
  panelContainer: css({
    height: "calc(100vh - 155px)",
    display: "flex",
    padding: "0 30px 0",
  }),
  emailPanel: css({
    flex: "0 400px",
    borderLeft: "1px solid #F4F4F4",
  }),
}

export default AppComponent
