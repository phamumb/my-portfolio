import React from "react"
import "../style.css"
import Info from "../components/Info"
import { Helmet } from "react-helmet"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ScrollUpButton from "react-scroll-up-button"
import { graphql } from "gatsby"

function index({ data }) {
  return (
    <div>
      <Info />
      <Education data={data.schools.edges} />
      <Projects data={data.projects.edges} />
      <Contact />
      <Footer />
      <ScrollUpButton style={{ backgroundColor: 0 }} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Luat Pham</title>
      </Helmet>
    </div>
  )
}

export default index

export const query = graphql`
  {
    projects: allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          id
        }
      }
    }

    schools:  allSchoolsYaml {
      edges {
        node {
          major
          name
          short
          attend
          courses
          id
        }
      }
    }  
  }
`
