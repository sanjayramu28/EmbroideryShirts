'use client'

import './Contact.css'

import Connect from '../../../../public/Assests/Connect.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <div className=' container-fluid'>
                {/* <h2>Let's Stay Connected</h2> */}
                <h2 className='d-flex justify-content-center p-4' id='contact'>Get in Touch with Us!</h2>
                <div className="row">
                    <div className='col-md-5 bg-light p-4'>
                        <Image src={Connect} alt="Connect" className='connect-img' />
                    </div>
                    <div className='col-md-7'>
                        <p className='fs-3'>For quick inquiries, fill out the form below and we’ll get back to you as soon as possible!</p>

                        <form className=' contact-form  w-75 p-3'>
                            <div className='w-100'>
                                <div style={{ position: "relative" }} className='mt-4' >
                                    <input type="text" id="fname" name="firstname" placeholder='' />
                                    <label>Name</label>
                                </div>
                                <div style={{ position: "relative" }} className='mt-4'>

                                    <input type='email' id='email' name='email' placeholder=' ' />
                                    <label>Your Email</label>
                                </div>
                                <div style={{ position: "relative" }} className='mt-4'>
                                    <input type='number' id='phone' name='phone' placeholder=' ' />
                                    <label >Your Mobile Number</label>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button type='submit' className='btn btn-primary mt-4 '>Submit-</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='social-media'>
                    
                </div>
                <p>Contact</p>
            </div>
        </>
    )
}

export default Contact;