import React from 'react'
import './Toggle.css';
import { NightlightOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className='toggle' onClick={handleClick} >
            <NightlightOutlined />
            <WbSunnyOutlined />
            <div className='t-button'
                style={darkMode ? {
                    left: '2px',
                    backgroundColor: 'var(--yellowgreen)',
                }
                    : { right: '2px', backgroundColor: 'var(--orange)' }
                }>

            </div>
        </div>
    )
}

export default Toggle