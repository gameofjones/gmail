import React, { FunctionComponent, ChangeEvent } from "react"
import { css } from "emotion"
import { Input, InputAdornment, SearchIcon } from "./MaterialUI"

const Toolbar: FunctionComponent = () => {
  return (
    <div className={styles.toolbar}>
      <Input
        id="standard-adornment-amount"
        onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
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
