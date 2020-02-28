import React, { FunctionComponent, KeyboardEvent, useContext } from "react"
import { css } from "emotion"
import { Input, InputAdornment, SearchIcon } from "./MaterialUI"
import { queryMessages } from "../api/MailApiMock"
import { MailContext } from "../store/StoreProvider"
import { setState } from "../store/actions"

const Toolbar: FunctionComponent = () => {
  const { state, dispatch } = useContext(MailContext)

  const handleChange = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const { value } = (e.target as HTMLInputElement)
      const messages = await queryMessages(value)
  
      setState(dispatch, {
        selectedLabel: undefined,
        selectedMessage: undefined,
        labels: state.labels,
        messages: messages,
      })
    }
  }

  return (
    <div className={styles.toolbar}>
      <Input
        id="standard-adornment-amount"
        onKeyDown={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon style={{ color: "#2979FF" }}/>
          </InputAdornment>
        }
      />
    </div>
  )
}

const appBorder = "1px solid #F4F4F4"

const styles = {
  toolbar: css({
    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px 0",
    borderBottom: appBorder,
  }),
}

export default Toolbar
