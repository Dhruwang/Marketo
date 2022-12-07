import React from 'react'

export default function Numbers() {
  return (
    <div className='container mx-auto py-4 my-4 row justify-content-around ' id='numbers'>
        <div className='num col-lg-3 col-md-8'>
            <p class=' numCount ' data-val="340">0</p>
            <h2 className=''>Projects Completed</h2>
        </div>
        <div className='num col-lg-3 col-md-8'>
            <p class=' numCount ' data-val="34">0</p>
            <h2 className=''>Happy Clients</h2>
        </div>
        <div className='num col-lg-3 col-md-8'>
            <p class=' numCount ' data-val="100">0</p>
            <h2 className=''>Brand Collborations</h2>
        </div>
    </div>
  )
}
