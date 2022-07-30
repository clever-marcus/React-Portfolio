import React from 'react'
import './Services.css';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import Resume from './Marcus Were - Resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Services = () => {
    const transition = { duration: 1, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='services' id='Services'>
            {/*left side */}
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>My amazing</span>
                <span style={{ color: darkMode ? 'var(--yellowgreen)' : '' }}>services</span>
                <span style={{ color: darkMode ? 'white' : '' }}>I love coding using latest technologies<br />
                    My goal is to help the society using software solutions</span>
                <a href={Resume} download>
                    <button className='button s-button' >Download CV</button>
                </a>
                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*right side */}
            <div className='cards'>
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    transition={transition}

                    style={{ left: '14rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Full-stack Developer"}
                        detail={"React, JavaScript, Python, Django, HTML, CSS, Git"}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services