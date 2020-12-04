import React, {useState, useEffect} from 'react'
import TwitterFeed from './TwitterFeed';
import InputBox from './Inputbox';
import tweetsFromJSON from '../static/tweets.json';

const TweetsHolder = () => {

    const [tweets, setTweets] = useState(tweetsFromJSON)

    const [input, setInput] = useState("");

    const [completedTweet, setCompletedTweet] = useState({
        name: "twittermaniac",
        username: "@twittermaniac",
        userpic: "https://en.bcdn.biz/Images/2016/11/15/776342f0-86f5-4522-84c9-a02d6b11c766.jpg",
        tweet: "",
        pic: "https://peliproducts.co.uk/wp/wp-content/uploads/2018/01/2-Northern-Quarter-1.jpg",
        alt: "",
        like: false
    });

    const handleTweet = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTweets([{...completedTweet, tweet:input}, ...tweets])
        
        setInput("")

    }

    const updateLike = (ind, likeStatus) => {
        let updatedTweets = [...tweets];
        updatedTweets[ind].like = likeStatus;   
        setTweets([...updatedTweets])

    }

    return (
        <div>
            <InputBox 
                input={input} 
                handleSubmit={handleSubmit}
                handleTweet={handleTweet}
            />
            <TwitterFeed 
            tweets={tweets}
            updateLike={updateLike}
            />
        </div>
    )
}

export default TweetsHolder
