import React from "react"

import Nav from "../components/nav"
import Header from "../components/header"
import Subheader from "../components/subheader"

import possibleMobileImage from "./work-assets/possibleMobile.png"

const WorkListItem = props => {
  return (
    <div>
      <a href={props.href}>{props.title}</a>
    </div>
  )
}

const WorkList = props => {
  return (
    <div>
      {props.items.map(item => (
        <WorkListItem href={item.href} title={item.title} />
      ))}
    </div>
  )
}

const WorkContentItem = props => {
  return (
    <div>
      <a href={props.href}>
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
      </a>
      <p>{props.description}</p>
    </div>
  )
}

const WorkContent = props => {
  return (
    <div>
      {props.items.map(item => (
        <WorkContentItem
          image={item.image}
          href={item.href}
          name={item.name}
          location={item.location}
          description={item.description}
        />
      ))}
    </div>
  )
}

const WorkItems = props => {
  const createLocalHrefFromName = name => {
    return name.toLowerCase().replace(" ", "-")
  }

  const itemsWithHref = props.items.map(item => {
    return Object.assign({}, item, {
      localHref: createLocalHrefFromName(item.name),
    })
  })

  const itemsForWorkList = itemsWithHref.map(item => {
    return { name: item.name, href: item.localHref }
  })

  return (
    <>
      <WorkList items={itemsForWorkList} />
      <WorkContent items={itemsWithHref} />
    </>
  )
}

const workItems = [
  {
    image: possibleMobileImage,
    imageHref: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
  {
    image: possibleMobileImage,
    imageHref: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile",
    location: "Denver",
    description:
      "The thing that has drawn me to POSSIBLE Mobile is their deep technical experience. At POSSIBLE I regularly get to work with people who have 5-10 years of Android experience. I've hugely enjoyed getting into the details and learning as much as I can about the Android platform.\nI currently work here as a Senior Android Developer.",
  },
]

const Work = props => {
  return (
    <>
      <Nav />

      <Header>Work</Header>
      <Subheader>
        happens all over. These are a few of the things I've done and the places
        they've happened.
      </Subheader>
      <Subheader>
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
