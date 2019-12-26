import React from "react"
import {
  FaGithub as Github,
  FaRegFolderOpen as Folder
} from "react-icons/fa"

function Card(props) {
  const { cardTitle, cardSubtitle, link } = props
  return (
    <div className="col-lg-4" >
      <div className="card mx-1 my-5" data-sal="fade" data-sal-delay="400">
        <div className="card-body">
          <Folder />
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text">{cardSubtitle}</p>
          <a className="mr-5 icon" href={link}>
            <Github />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
