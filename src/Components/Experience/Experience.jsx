import React from 'react'
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='experience' id='Experience'>
            <div className='achievement'>
                <div className='circle' style={{ color: darkMode ? 'var(--indigo)' : '' }}>3+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>years</span>
                <span style={{ color: darkMode ? 'var(--yellowgreen)' : '' }}>Experience</span>
            </div>
            <div className='achievement'>
                <div className='circle' style={{ color: darkMode ? 'var(--indigo)' : '' }}>15+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>completed</span>
                <span style={{ color: darkMode ? 'var(--yellowgreen)' : '' }}>Projects</span>
            </div>
            <div className='achievement'>
                <div className='circle' style={{ color: darkMode ? 'var(--indigo)' : '' }}>3+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>worked</span>
                <span style={{ color: darkMode ? 'var(--yellowgreen)' : '' }}>companies</span>
            </div>
        </div>
    )
}

export default Experience