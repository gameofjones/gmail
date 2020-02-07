import React, { FunctionComponent } from "react"
import { css } from "emotion"
import Typography from "@material-ui/core/Typography"

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <Typography variant="h4" className={styles.typography} style={{ fontWeight: "bold" }}>
        <label className={styles.G}>G</label>
        <label className={styles.O}>O</label>
        <label className={styles.J}>J</label>
        <img
          alt=""
          className={styles.image}
          src="https://lh3.googleusercontent.com/proxy/vdq9qUoDL2RB20Y9hxeXtnFL-3Z-x161Z5YNfZ8TkXFa4yZ8eUHz68QB57oj4mLwnF-hfP6gsruIEeV7MZ4rn0gc7Vj1pk7qVDMNtqoJVlTFfoWViVtIkUFoU2XUFcNZOGqY1aU" />
      </Typography>
    </div>
  )
}

export default Logo

const styles = {
  typography: css({
    letterSpacing: "2px",
    padding: "15px 15px 15px 30px",
  }),
  image: css({
    height: "39px",
    margin: "-7px",
    paddingLeft: "16px",
  }),
  logo: css({
    flex: 1,
  }),
  G: css({
    color: "#2979FF",
  }),
  O: css({
    color: "red",
  }),
  J: css({
    color: "#FDD835",
  }),
}
