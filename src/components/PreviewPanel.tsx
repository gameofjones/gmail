import React, { FunctionComponent } from "react"
import { css } from "emotion"
import Typography from "@material-ui/core/Typography"
import Buffer from "./Buffer"

interface PreviewPanelProps {
  sender: string
  recipients: string[]
  subject: string
  body: string
}

const PreviewPanel: FunctionComponent<PreviewPanelProps> = ({
  sender,
  recipients,
  subject,
  body,
}) => {
  return (
    <div className={styles.previewPanel}>
      <Typography variant="subtitle2" gutterBottom>{sender}</Typography>
      <Typography variant="subtitle2" gutterBottom>
      {
        recipients.map((recipient, index) => {
          return (
            <span key={index}>{recipient}; </span>
          )
        })
      }
      </Typography>
      <Buffer height={20} />
      <Typography variant="h5" gutterBottom>{subject}</Typography>
      <Buffer height={20} />
      <Typography variant="body2" gutterBottom>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. A diam sollicitudin tempor id eu. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Aliquam nulla facilisi cras fermentum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Nam libero justo laoreet sit. Et netus et malesuada fames. Pellentesque habitant morbi tristique senectus et netus et malesuada. Massa vitae tortor condimentum lacinia quis vel eros donec. Arcu ac tortor dignissim convallis aenean et tortor at risus. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Odio tempor orci dapibus ultrices in iaculis nunc. Auctor elit sed vulputate mi sit amet. Varius vel pharetra vel turpis nunc eget lorem. Duis convallis convallis tellus id interdum velit laoreet id donec.</span>
        <br /><br />
        <span>Interdum velit euismod in pellentesque massa placerat. Cras ornare arcu dui vivamus. Id velit ut tortor pretium viverra suspendisse potenti nullam. Eget egestas purus viverra accumsan in. A lacus vestibulum sed arcu non. Felis eget velit aliquet sagittis id consectetur purus. Orci eu lobortis elementum nibh tellus molestie. Libero justo laoreet sit amet cursus sit amet dictum. Semper auctor neque vitae tempus quam pellentesque nec. Augue neque gravida in fermentum et sollicitudin ac. Leo duis ut diam quam nulla porttitor massa. In ornare quam viverra orci sagittis. Sodales ut eu sem integer. Ultrices tincidunt arcu non sodales.</span>
      </Typography>
    </div>
  )
}

export default PreviewPanel

const appBorder = "2px solid #F4F4F4"

const styles = {
  previewPanel: css({
    flex: 1,
    borderLeft: appBorder,
    color: "#585858",
    padding: "20px 30px",
  }),
}
