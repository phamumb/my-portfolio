import React from "react"
import Navbar from "./Navbar"

export default function Info() {
  return (
    <section id="about">
      <Navbar />
      <div className="container" data-sal="slide-left" data-sal-delay="500"
  data-sal-easing="ease">
        <div className="my-5"></div>
        <div className="display-3" style={{ color: "#FF8A00" }}>
          <span style={{ color: "white" }}>Hello, I'm</span> <br />
          Luat Pham.
      </div>
        <div className="h1 code mt-4 mb-3">{"{"}</div>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          A Passionate Front-end Developer, UI/UX Enthusiast, Android Geek and Web
          Developer.
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
      </div>
        <div className="h1 code mt-2 mb-3">{"}"}</div>
      </div>
    </section>

  )
}
