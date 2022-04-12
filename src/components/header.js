import React from "react"

import * as styles from "./header.module.css"

const Header = props => {
  return (
    <h2 style={props.style} className={styles.header}>
      {props.children}
    </h2>
  )
}

export default Header
