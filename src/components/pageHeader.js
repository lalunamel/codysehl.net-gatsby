import React from "react"

import styles from "./pageHeader.module.css"

const PageHeader = props => {
  return <div className={styles.pageHeader}>{props.children}</div>
}

export default PageHeader
