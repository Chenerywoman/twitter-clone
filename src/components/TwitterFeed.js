import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = ({tweets, updateLike}) => {

    return (
        <div className="twitter-feed">
            {tweets.map((tweet, ind) => {
                console.log(`like in twitterFeed ${tweet.like}`)
                return (
                    <Tweet 
                        key={ind}
                        ind={ind}
                        name={tweet.name}
                        username={tweet.username}
                        userpic={tweet.userpic}
                        tweet={tweet.tweet}
                        pic={tweet.pic}
                        alt={tweet.alt}
                        like={tweet.like}
                        updateLike={updateLike}
                    />
                )
            })}
            
        </div>
    )
}
export default TwitterFeed
