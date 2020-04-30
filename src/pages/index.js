import React from "react"

import Nav from "../components/nav"
import Header from "../components/header"
import Subheader from "../components/subheader"

export default () => (
  <>
    <Nav />

    <Header>Cody Sehl</Header>
    <Subheader>
      is a software developer in Denver, Colorado. <br />
      He currently works as a Senior Android Developer at POSSIBLE Mobile.
    </Subheader>

    <div>
      <ol>
        <li>
          <a href="mailto:cody.sehl@gmail.com">cody.sehl@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/lalunamel">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/pub/cody-sehl/45/21a/524">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/codysehl">Behance</a>
        </li>
      </ol>
    </div>
  </>
)
