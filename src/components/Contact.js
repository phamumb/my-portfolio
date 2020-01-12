import React from 'react'
export default function Contact() {
    return (
        <section id="contact">
        <h2 className="text-primary font-weight-bold">Get In Touch</h2>
            <div class="container-fluid">
                <p class="text-muted">Although I'm not currently looking for freelance opportunities, my inbox is always open.
                 Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
                 <form action="mailto:phamdluat@gmail.com" method="GET">
                    <button type="submit" class="btn btn-outline-light text-center">Say Hi!</button>
                </form>
            </div>
        </section>

    )
}
