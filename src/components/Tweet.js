import React, {useState} from 'react';
import './Tweet.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faShareAlt} from "@fortawesome/free-solid-svg-icons";
// import {fa} from  '@fortawesome/free-brands-svg-icons'
// import {fa} from '@fortawesome/free-regular-svg-icons';

const Tweet = () => {

    const [like, setLike] = useState(false);
    const [colour, setColour] = useState("#50ACF2")

    const toggleLike = () => {

        console.log('in handleLike')

        if (like === false) {
            setLike(true)
            setColour("#e0245e")

        } else {
            setLike(false)
            setColour("#50ACF2")
        }

    }

    return (
        <div className="tweet-container">
            <div className="profile-pic-container">
                <img className="small-profile--pic" src="https://d1qxviojg2h5lt.cloudfront.net/images/01DRSZ66WFSJ15HP2K342CCGCX/dafne570.png" alt="lyra-pic" />
            </div>
            <div className="tweet-content-container">  
                <div className="tweet-header">
                    <h4 className="user-name">User name</h4>
                    <p className="twitter-handle">@twitterHandle</p>
                </div>
                <div className="twitter-content">
                    <p>
                    I mean, if you can’t say something in a tight two sentences, save it for your blog, you know? Maybe we should all be more conscious with our communication and spend more time focusing on the things important to us. Like dinosaurs, for instance. Anyway, that is all I wanted to say
                    </p>
                    <img className="tweet-pic" src="https://img.cinemablend.com/filter:scale/quill/6/c/a/4/1/4/6ca414247360021311dbc821947d4a8f24d724a5.png?mw=600" alt="" />
                </div>
                <div className="twitter-buttons">
                    <FontAwesomeIcon id="comment-icon"icon={faComment} />
                    <FontAwesomeIcon id="retweet-icon"icon={faRetweet} />
                    <FontAwesomeIcon style={{color:colour}} id="like-icon" onClick={toggleLike} icon={faHeart} />
                    <FontAwesomeIcon id="share-icon"icon={faShareAlt} />
                </div>
            </div>
        </div>
    )
}

export default Tweet
