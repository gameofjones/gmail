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
          src="https://1.bp.blogspot.com/-YNmaVFHh3IQ/W64nZpR860I/AAAAAAAAEbA/BnSQt9Fnz7M4g6Z4AncopinWUWbvBMnzwCPcBGAYYCw/s1600/Google%2BMail.png" />
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
    height: "42px",
    margin: "-9px",
    paddingLeft: "10px",
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
