import React, { FunctionComponent } from "react"
import { css } from "emotion"
import { Input, InputAdornment, SearchIcon } from "./MaterialUI"

const Toolbar: FunctionComponent = () => {
  return (
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
  )
}

const appBorder = "2px solid #F4F4F4"

const styles = {
  toolbar: css({
    height: "80px",
    display: "flex",
    alignItems: "center",
    padding: "0 30px 0",
    backgroundColor: "#FCFCFA",
    color: "#2962FF",
    borderBottom: appBorder,
  }),
}

export default Toolbar
