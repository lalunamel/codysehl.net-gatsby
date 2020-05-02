import React from "react"

import styles from "./subheader.module.css"

const Subheader = props => {
  return (
    <div style={props.style} className={styles.subheader}>
      {props.children}
    </div>
  )
}

export default Subheader
