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
      <Education />
      <Projects data={data.allProjectsYaml.edges} />
      <Contact />
      <Footer />
      <ScrollUpButton style={{backgroundColor: 0}} />
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
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          link
          languages
          id
        }
      }
    }
  }
`
