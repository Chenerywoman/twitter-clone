import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = ({tweets}) => {

    return (
        <div className="twitter-feed">
            {tweets.map((tweet, ind) => {
                return (
                    <Tweet 
                        key={ind}
                        name={tweet.name}
                        username={tweet.username}
                        userpic={tweet.userpic}
                        tweet={tweet.tweet}
                        pic={tweet.pic}
                        alt={tweet.alt}
                    />
                )
            })}
            
        </div>
    )
}
export default TwitterFeed
