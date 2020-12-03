import React from 'react'
import './Header.css';
//import {Link} from 'react-router-dom';
import Twitter from './twitter.jpg'
import Icon from './quill.jpg'

const Header = () => {
        return (
            <div className="header">
                <img className="bird"src={Twitter} alt="bird" />
                <h1>Home</h1>
                <img className="icon"src={Icon} alt="tweet" />
            </div>
        )
    };
    
    export default Header;
  