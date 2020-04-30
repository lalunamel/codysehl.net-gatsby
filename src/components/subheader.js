import React from "react"

import styles from "./subheader.module.css"

const Subheader = props => {
  return <div className={styles.subheader}>{props.children}</div>
}

export default Subheader
