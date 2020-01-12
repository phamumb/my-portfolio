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
          I am a software engineer based in Boston, MA specializing in building Softwares 
          and most abstracted to solving real algorithms problems.
          <br /> .A Passionate Full-stack Developer, UI/UX Enthusiast, Algorithms and Data Structures Geek.
      </p>
        <div className="h1 code mt-2 mb-3">{"}"}</div>
      </div>
    </section>

  )
}
