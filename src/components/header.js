import React from "react"

import styles from "./header.module.css"

const Header = props => {
  return <h2 className={styles.header}>{props.children}</h2>
}

export default Header
