import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'

const SideBar = () => {
    const [isStarted, setStarted] = useState("false");
    const [isComponents, setComponents] = useState("false");
    const [isContent, setContent] = useState("false");
    const [isCustom, setCustom] = useState("false");
    const [isStyle, setStyle] = useState("false");
    const [isHelper, setHelper] = useState("false");
    const [isGuide, setGuide] = useState("false");


    return (
        <div className="sidebar">
            <nav>
                <div>
                    <ul>
                        <h2>About UI Heat</h2>
                    </ul>
                    <ul>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h2 onClick={() => setStarted(!isStarted)}>Getting Started
                        </h2>
                            <MdKeyboardArrowRight style={{ paddingLeft: "20px", fontSize: '2rem' }} />
                        </div>
                        <ul className={isStarted ? "gettingStarted" : null}>
                            <li>
                                <a href="#">
                                    <p>Installation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Usage</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>UI Heat CLI</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setComponents(!isComponents)}> Components</h2>
                        <ul className={isComponents ? "components" : null}>

                            <li>
                                <a href="#">
                                    <p>Layout</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Input</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Navigation</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Data Display</p>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <p>Utilies</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setContent(!isContent)}> Content</h2>
                        <ul className={isContent ? "content" : null}>

                            <li>
                                <a href="#">
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Images</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setHelper(!isHelper)}> Helpers</h2>
                        <ul className={isHelper ? "helper" : null}>
                            <li>
                                <a href="#">
                                    <p>Position</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Text truncation</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setCustom(!isCustom)}> Customization</h2>
                        <ul className={isCustom ? "custom" : null}>

                            <li>
                                <a href="#">
                                    <p>Palette</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Breakpoints</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setStyle(!isStyle)}> Styles</h2>
                        <ul className={isStyle ? "style" : null}>

                            <li>
                                <a href="#">
                                    <p>Basic</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Advanced</p>
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <h2 onClick={() => setGuide(!isGuide)}> Guides</h2>
                        <ul className={isGuide ? "guide" : null}>

                            <li>
                                <a href="#">
                                    <p>Responsive UI</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Breakpoints</p>
                                </a>
                            </li>
                        </ul>
                    </ul>

                </div>
            </nav>
        </div >
    )
}

export default SideBar;
