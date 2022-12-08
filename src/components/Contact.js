import React from 'react'

export default function Contact() {
    return (
        <>
        <div className='container contactForm'>
            <h1 className='OutlineTitle rofontbotoBold mb-4'>GET IN TOUCH</h1>
            <form>
                <div className='formMain row justify-content-around'>
                    <div className='formInputDiv my-4 col-md-4'>
                    <input type="text" id="name" name="name" placeholder='Name'/>
                    </div>
                    <div className='formInputDiv my-4 col-md-4'>
                    <input type="text" id="lastname" name="lastname" placeholder='Lastname'/>
                    </div>
                    <div className='formInputDiv my-4 col-md-10'>
                    <input type="text" id="company" name="company" placeholder='Company'/>
                    </div>
                    <div className='formInputDiv my-4 col-md-10'>
                    <input type="email" id="email" name="email" placeholder='Email Address'/>
                    </div>
                    <div className='formInputDiv my-4 col-md-10'>
                    <input type="number" id="number" name="number" placeholder='Contact Number'/>
                    </div>
                    <div className='formInputDiv my-4 col-md-10'>
                    <input type="text" id="enquiry" name="enquiry" placeholder='Enquiry'/>
                    </div>
                </div>
            </form>
        </div>
                <div className='flex-row text-align-center py-4'>
                    <p className='text-light fs-5'>Follow us on</p>
                <i class="bi text-light fs-3 mx-4 bi-instagram"></i>
                <i class="bi bi-twitter  text-light fs-3 mx-4"></i>
                <i class="bi bi-whatsapp  text-light fs-3 mx-4"></i>
                </div>
                </>
    )
}
