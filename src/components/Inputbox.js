import React from 'react'
import './Inputbox.css'


function Inputbox({input, handleSubmit, handleTweet}) {
   
    return (
        <form onSubmit={handleSubmit}>
            <input className="tweet" value={input} onChange={handleTweet} type="text" placeholder="What's happening?"/>
            <button className="button" type="submit">Tweet</button>
        </form>
    )
    
}

export default Inputbox
