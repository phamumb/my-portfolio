import React from "react"

export default function Info() {
  return (
    <section id="about">
      <div className="container" >
        <div className="my-5"></div>
        <p className="display-3 text-primary">
          <span className="text-white">Hello, I'm</span> <br />
          Luat Pham.
      </p>
        <div className="h2 code mt-4 mb-3">{"{"}</div>
        <p className="text-muted mx-5 my-4 text-justify info">
          A Passionate Front-end Developer, UI/UX Enthusiast, Android Geek and Web
          Developer.
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et.
      </p>
        <div className="h1 code mt-2 mb-3">{"}"}</div>
      </div>
    </section>

  )
}
