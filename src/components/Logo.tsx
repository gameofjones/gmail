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
