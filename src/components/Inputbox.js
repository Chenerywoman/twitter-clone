import React from 'react'


function Inputbox({input, handleSubmit, handleTweet}) {
   
    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleTweet} type="text" />
            <button type="submit">Tweet</button>
        </form>
    )
    
}

export default Inputbox
