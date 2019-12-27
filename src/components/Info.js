import React from "react"

export default function Info() {
  return (
    <section id="about">
      <div className="container" data-sal="slide-left" data-sal-delay="600"
  data-sal-easing="ease">
        <div className="my-5"></div>
        <div className="display-3 text-primary">
          <span className="text-white">Hello, I'm</span> <br />
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
