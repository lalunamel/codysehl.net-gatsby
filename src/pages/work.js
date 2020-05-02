import React from "react"

import Nav from "../components/nav"
import Header from "../components/header"
import Subheader from "../components/subheader"
import PageHeader from "../components/pageHeader"
import WorkItems from "../components/workItems"

import possibleMobileImage from "./work-assets/possibleMobile.png"
const workItems = [
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 1",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 2",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 3",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 4",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 5",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile 6",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
]

const Work = props => {
  return (
    <>
      <Nav />

      <PageHeader>
        <Header>Work</Header>
        <Subheader>
          happens all over. These are a few of the things I've done and the
          places they've happened.
        </Subheader>
      </PageHeader>
      <Subheader style={{ textAlign: "center", marginTop: 50 }}>
        Take a look at my{" "}
        <a
          href={"https://www.dropbox.com/s/8bmtjg75ppk0nvk/Resume-CodySehl.pdf"}
        >
          resume
        </a>{" "}
        if you want a hard copy.
      </Subheader>

      <WorkItems items={workItems} />
    </>
  )
}

export default Work
