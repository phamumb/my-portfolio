import React from 'react'
import School from './School'

function Education({ data }) {
    return (
        <section id="education">
            <div class="container">
                <h2>Education</h2>
                {
                    data.map(({node}, i)=>{
                        return (
                            <School name={node.name}
                            short={node.short} 
                            major={node.major}
                            attend={node.attend}
                            courses={node.courses}
                            key={node.id}/>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default Education;
