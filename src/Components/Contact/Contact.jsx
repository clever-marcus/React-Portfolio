import React, { useRef, useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sqms687', 'template_mc1mvar', form.current, '8UrVC9KNQFXxf1NON')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className='contact-form' id='Contact'>
            <div className='w-left'>
                <div className='awesome'>
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className='blur s-blur1'
                        style={{ background: "#ABF1FF94" }}
                    >

                    </div>
                </div>
            </div>

            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        style={{ border: darkMode ? '2px solid var(--yellowgreen)' : '' }}
                        type="text" name='user_name' className='user' placeholder='Name' />
                    <input
                        style={{ border: darkMode ? '2px solid var(--yellowgreen)' : '' }}
                        type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea
                        style={{ border: darkMode ? '2px solid var(--yellowgreen)' : '' }}
                        name='message' className='user' placeholder='Message' />
                    <input type='submit' value="Send" className='button' />
                    <span>{done && alert("Thanks for contacting me")}</span>
                    <div
                        className='blur c-blur1'
                        style={{ background: "var(--purple)" }}></div>
                </form>

            </div>
        </div>
    )
}

export default Contact