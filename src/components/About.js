import React from 'react'
import aboutimg1 from '../images/about.jpg'
import aboutimg2 from '../images/about2.jpg'
import aboutimg3 from '../images/about3.jpg'

export default function About() {
    return (
        <div className='container text-left my-4' id='about'>
            <h1 className='OutlineTitle rofontbotoBold'>ABOUT US</h1>
            <div className='d-flex flex-column'>
                <div className=' aboutbox'>
                    <div className='Aboutimg'><img className='aboutimg' src={aboutimg1}></img></div>
                    <div className='Abouttext mx-2'>
                        <h3 className='fs-3 OutlineTitle rofontbotoBold'>What we do?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div className=' aboutbox aboutReverse'>
                    <div className='Abouttext mx-2'>
                        <h3 className='fs-3 OutlineTitle rofontbotoBold'>Our Aim</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                    <div className='Aboutimg'><img className='aboutimg' src={aboutimg2}></img></div>
                </div>
                <div className=' aboutbox'>
                    <div className='Aboutimg'><img className='aboutimg' src={aboutimg3}></img></div>
                    <div className='Abouttext mx-2'>
                        <h3 className='fs-3 OutlineTitle rofontbotoBold'>History</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
