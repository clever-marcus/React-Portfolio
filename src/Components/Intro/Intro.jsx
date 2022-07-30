import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassesEmoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Intro = () => {
    const transition = { duration: 2, type: 'spring' }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hi, I am</span>
                    <span style={{ color: darkMode ? 'var(--yellowgreen)' : '' }}>Marcus </span>
                    <span style={{ color: darkMode ? 'white' : '' }}>A mid level Software Developer with 3+
                        years of experience in Web Development.
                        I have a passion for developing innovative
                        software solution that expedites efficiency
                        and effective organizational access.
                        I'm currently seeking for a position in a progressive
                        environment where I can utilize and grow my skills.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className='i-icons'>
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={{ transition }}
                    src={GlassesEmoji} alt="" />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}

                    style={{ top: '-4%', left: '68%' }} className='floating-div'>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}

                    style={{ top: '18rem', left: '0rem' }} className='floating-div'>
                    <FloatingDiv image={Thumbup} txt1='Certified' txt2='Developer' />
                </motion.div>
                {/* blur divs */}
                <div className='blur'
                    style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur'
                    style={{
                        background: '#c1f5ff',
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem'
                    }}>

                </div>
            </div>
        </div>
    )
}

export default Intro