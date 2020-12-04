import React, {useState} from 'react'
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
        pic: "",
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

    console.log(tweets)
    return (
        <div>
            <InputBox 
                input={input} 
                handleSubmit={handleSubmit}
                handleTweet={handleTweet}
            />
            <TwitterFeed tweets={tweets}/>
        </div>
    )
}

export default TweetsHolder
