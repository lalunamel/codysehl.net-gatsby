import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.css"

const Nav = props => {
  return (
    <div className={styles.nav}>
      <Link className={styles.link} to={"/"}>
        About
      </Link>
      <Link className={styles.link} to={"/work/"}>
        Work
      </Link>
      <Link className={styles.link} to={"/blog"}>
        Blog
      </Link>
    </div>
  )
}

export default Nav
