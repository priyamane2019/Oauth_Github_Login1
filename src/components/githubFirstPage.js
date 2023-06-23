import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import "./Rough.css"
const Rough = () => {
    return (
        <div className="MainContainer">
            <div className="header">
                <nav>
                    <div className="navchild">
                        <div className="navchild1">
                            <span className='gitlogo'><BsGithub size={40} /></span>
                            <div className="search-input-container">
                                <input type="text" className='searchip' placeholder="Search or jump to..." />
                                <FaSearch className="search-icon" />
                            </div>
                        </div>
                        <div className="navchild2">
                            <ul>
                                <li>Pull requests</li>
                                <li>Issues</li>
                                <li>codespaces</li>
                                <li>MarketPlace</li>
                                <li>explore</li>
                            </ul>
                        </div>
                        {/* <div className="navchild3">
                            <ul>
                                <li>hsgd</li>
                                <li>jshgh</li>
                            </ul>
                        </div> */}
                    </div>


                </nav>

            </div>
        </div>
    )
}

export default Rough
