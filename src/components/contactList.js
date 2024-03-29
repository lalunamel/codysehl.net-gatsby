import React from "react"

import * as styles from "./contactList.module.css"

const ContactList = props => {
  return (
    <div className={styles.contactList}>
      <a className={styles.item} href="https://github.com/lalunamel">
        GitHub
      </a>
      <a
        className={styles.item}
        href="https://www.linkedin.com/pub/cody-sehl/45/21a/524"
      >
        LinkedIn
      </a>
      <a className={styles.item} href="https://www.behance.net/codysehl">
        Behance
      </a>
    </div>
  )
}

export default ContactList
