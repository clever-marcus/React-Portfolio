import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import { Instagram, Facebook, GitHub } from '@mui/icons-material';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Footer = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='footer'>
            <img src={Wave} alt='' style={{ width: '100%' }} />
            <div className="f-content">
                <span style={{ color: darkMode ? 'var(--indigo)' : '' }}>marcusogutu430@gmail.com</span>
                <div className="f-icons">
                    <Instagram style={{ color: "white", size: '8rem', cursor: 'pointer' }} />
                    <Facebook style={{ color: "white", size: '8rem', cursor: 'pointer' }} />
                    <GitHub style={{ color: "white", size: '8rem', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    )
}

export default Footer