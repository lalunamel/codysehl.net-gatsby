import React from "react"
import { Link } from "gatsby"

const Nav = props => {
  return (
    <div>
      <ol>
        <li>
          <Link to={"/"}>About</Link>
        </li>
        <li>
          <Link to={"/work"}>Work</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ol>
    </div>
  )
}

export default Nav
