import React from "react"
import "../style.css"
import { graphql } from "gatsby"
import Card from "./Card"

function Projects({ data: props }) {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          {props.map(({ node }) => {
            return (
              <Card
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                link={node.link}
                key={node.id}
              />
            )
          })}
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-outline-light text-center">Show More</button>
        </div>
      </div>
    </section>

  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }
  }
`
