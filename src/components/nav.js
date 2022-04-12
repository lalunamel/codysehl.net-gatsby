import React from "react"
import { Link } from "gatsby"

import * as styles from "./nav.module.css"

const Nav = props => {
  return (
    <div className={styles.nav}>
      <Link className={styles.link} to={"/"}>
        About
      </Link>
      <Link className={styles.link} to={"/work/"}>
        Work
      </Link>
      <a className={styles.link} href={"https://blog.codysehl.net/"}>
        Blog
      </a>
    </div>
  )
}

export default Nav
