import React, { useState } from "react"
import "../style.css"
import Card from "./Card"

function Projects({ data }) {
  const [showMore, setShowMore] = useState(false);
  const LIMIT = 6;
  const firstSixProjects = data.slice(0, LIMIT);
  const projectsToShow = showMore ? data : firstSixProjects;

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
            {projectsToShow.map(({ node}) => {
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
          <button type="button" class="btn m-5 btn-outline-light text-center"
            onClick={() => setShowMore(!showMore)}>Show {showMore ? 'Less' : 'More'}</button>
        </div>
      </div>
    </section>

  )
}

export default Projects