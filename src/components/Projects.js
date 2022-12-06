import React from 'react'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
export default function Projects() {
    return (
        <div class="projects my-4" id="projects">
            <div className='container'>
                <h1 className='OutlineTitle rofontbotoBold'>PROJECTS</h1>
                <div className='slider d-flex mx-auto mt-4'>
                    <div>
                        <img src={project1}></img>
                    </div>
                    <div>
                        <img src={project2}></img>
                    </div>
                    <div>
                        <img src={project3}></img>
                    </div>

                </div>
            </div>
        </div>
    )
}
