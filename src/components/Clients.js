import React from 'react'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'
import client5 from '../images/client5.png'
import client6 from '../images/client6.png'
import client7 from '../images/client7.png'
export default function Clients() {
    return (
        <div className='container w-75 my-4 py-4' id='clients'>
            <h1 className='OutlineTitle rofontbotoBold mb-4'>CLIENTS</h1>
            <div className='clientSection row'>
                <div className='clientCard col-lg-8 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client1} alt="coca-cola"></img>
                        </div>
                        <div className='clientCardBack'>
                            <h1>Coca Cola</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-4 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client2} alt="Aka"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>AKA</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-4 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client3} alt="Skoda"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>Skoda</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-4 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client4} alt="Sky"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>Sky</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-4 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client6} alt="Nbird"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>Nbird</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-8 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client5} alt="WestingHouse"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>Westing House</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='clientCard col-lg-4 p-0'>
                    <div className='clientCardInner'>
                        <div className='clientCardFront'>
                            <img src={client7} alt="Target"></img>
                        </div>
                        <div className='clientCardBack'>
                        <h1>Target</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
