import React from 'react'
import project1 from '../images/project1.jpg'
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import { Carousel } from 'react-bootstrap';
export default function Projects() {
    return (
        <div class="projects my- pt-4" id="projects">
            <div className=''>
                <h1 className='OutlineTitle rofontbotoBold'>PROJECTS</h1>
                <div className='wrapper'>
                    <div className='slider mx-auto mt-4'>
                        <Carousel interval='3000'>
                            <Carousel.Item>
                                <img
                                    className="cimg d-block w-100"
                                    src={project1}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='carouselText'>
                                    <h3>Project 1</h3>
                                    <p className='fs-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="cimg d-block w-100"
                                    src={project2}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='carouselText'>
                                    <h3>Project 2</h3>
                                    <p className='fs-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="cimg d-block w-100"
                                    src={project3}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='carouselText'>
                                    <h3>Project 3</h3>
                                    <p className='fs-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>

                </div>
            </div>
        </div>
    )
}
