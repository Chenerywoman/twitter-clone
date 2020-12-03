import React, {useState} from 'react'
import './Header.css';
//import {Link} from 'react-router-dom';
import Twitter from './twitter.jpg'
import Icon from './quill.jpg'



const Header = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        if (visibility == false) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
        console.log(visibility);
    }
        return (
            <div className="header">
                <img className="bird"src={Twitter} alt="bird" />
                <h1>Home</h1>
                <img onClick={toggleVisibility} className="icon"src={Icon} alt="tweet" />
            </div>
        )
    };
    
    export default Header;
  