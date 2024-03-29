import React, { useState } from "react"
import Markdown from "react-remarkable"
import * as styles from "./workItems.module.css"

const WorkListItem = props => {
  return (
    <a className={styles.workListItem} href={`#${props.localHref}`}>
      {props.name}
    </a>
  )
}

const WorkList = props => {
  const [showAllItems, setShowAllItems] = useState(false)
  const itemsToShow = showAllItems ? props.items : props.items.slice(0, 3)

  return (
    <div className={styles.workList}>
      {itemsToShow.map(item => (
        <WorkListItem
          localHref={item.localHref}
          name={item.name}
          key={item.name}
        />
      ))}
      {!showAllItems && (
        <a
          className={styles.showAllItems}
          onClick={() => {
            setShowAllItems(true)
          }}
        >
          ...
        </a>
      )}
    </div>
  )
}

const WorkContentItem = props => {
  return (
    <div id={props.localHref} className={styles.workContentItem}>
      <a href={props.website}>
        <img
          className={styles.workContentItemImage}
          src={props.image}
          alt={props.name}
        />
        <h3 className={styles.workContentItemName}>{props.name}</h3>
        <h3 className={styles.workContentItemLocation}>{props.location}</h3>
      </a>
      <div className={styles.workContentItemDescription}>
        <Markdown>{props.description}</Markdown>
      </div>
    </div>
  )
}

const WorkContent = props => {
  return (
    <div className={styles.workContent}>
      {props.items.map(item => (
        <WorkContentItem
          image={item.image}
          localHref={item.localHref}
          website={item.website}
          name={item.name}
          location={item.location}
          description={item.description}
          key={item.name}
        />
      ))}
    </div>
  )
}

const WorkItems = props => {
  const createLocalHrefFromName = name => {
    return name.toLowerCase().replace(/\s/g, "-")
  }

  const itemsWithHref = props.items.map(item => {
    return Object.assign({}, item, {
      localHref: createLocalHrefFromName(item.name),
    })
  })

  const itemsForWorkList = itemsWithHref.map(item => {
    return { name: item.name, localHref: item.localHref }
  })

  return (
    <>
      <WorkList items={itemsForWorkList} />
      <WorkContent items={itemsWithHref} />
    </>
  )
}

export default WorkItems
