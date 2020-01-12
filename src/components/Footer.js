import React from 'react'
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="h1 mt-5">
        <a className="m-4 icon" href="https://twitter.com/Mr404Found">
          <Twitter />
        </a>
        <a className="m-4 icon" href="https://www.linkedin.com/in/luat-pham-6b5338191/">
          <Linkedin />
        </a>
        <a className="m-4 icon" href="https://github.com/phamumb">
          <Github />
        </a>
      </div>
    </footer>

  )
}

export default Footer;

