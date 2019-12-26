import React from 'react'
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="h1 mt-5">
        <a className="m-4 icon" href="https://twitter.com/Mr404Found">
          <Twitter />
        </a>
        <a className="m-4 icon" href="https://instagram.com/sumanth.zero7">
          <Insta />
        </a>
        <a className="m-4 icon" href="https://github.com/phamumb">
          <Github />
        </a>
        <a className="m-4 icon" href="mailto://phamdluat@gmail.com">
          <Mail />
        </a>
      </div>
    </footer>

  )
}

export default Footer;

