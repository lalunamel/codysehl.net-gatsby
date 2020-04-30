import React from "react"

import Nav from "../components/nav"
import PageHeader from "../components/pageHeader"
import Header from "../components/header"
import Subheader from "../components/subheader"
import ContactList from "../components/contactList"

export default () => (
  <>
    <Nav />

    <PageHeader>
      <Header>Cody Sehl</Header>
      <Subheader>
        is a software developer in Denver, Colorado. <br />
        He currently works as a Senior Android Developer at POSSIBLE Mobile.
      </Subheader>
    </PageHeader>

    <ContactList />
  </>
)
