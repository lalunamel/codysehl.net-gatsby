import React from "react"

import * as styles from "./pageHeader.module.css"

const PageHeader = props => {
  return (
    <div style={props.style} className={styles.pageHeader}>
      {props.children}
    </div>
  )
}

export default PageHeader
