import React from 'react';
import './components.scss'
import { FiGithub, FiLinkedin, FiTwitter, FiSun, FiMoon, FiSearch } from "react-icons/fi";


const Social = () => {
    return (
        <ul className="social">
            <li>
                <FiSearch />
            </li>
            <li>
                <FiGithub />
            </li>
            <li>
                <FiLinkedin />
            </li>
            <li>
                <FiTwitter />
            </li>
            <li>
                <FiSun />
            </li>
            <li>
                <FiMoon />
            </li>

        </ul>
    )
}

export default Social;