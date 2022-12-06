import React from 'react'

export default function Services() {
    return (
        <div className='servicesMain' id='services'>
            <div className='container'>
                <h1 className='OutlineTitle rofontbotoBold pt-4'>Services</h1>
                <p className='rofontbotoBold fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class=" services mt-4 row justify-content-around">
                    <div className=' serviceCard col-md-3 '>
                        <i class="bi bi-camera-reels"></i>
                        <h2>Video Editing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className=' serviceCard col-md-3'>
                        <i class="bi bi-pc-display-horizontal"></i>
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className=' serviceCard col-md-3'>
                        <i class="bi bi-phone"></i>
                        <h2>App Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className=' serviceCard col-md-3 '>
                        <i class="bi bi-search"></i>
                        <h2>SEO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className=' serviceCard col-md-3'>
                        <i class="bi bi-menu-up"></i>
                        <h2>Social Media Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className=' serviceCard col-md-3 '>
                    <i class="bi bi-envelope-at-fill"></i>
                        <h2>Email Marketing</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                </div>
            </div>
        </div >
    )
}
