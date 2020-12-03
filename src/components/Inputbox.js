import React, {useState} from 'react'


function Inputbox() {
    const [tweet, setTweet] = useState("");

    const handleTweet = (e) => {
        setTweet (e.target.value)
        console.log(`handle${tweet}`)

    }

    const handleSubmit = (e) => {
        console.log(`submit${tweet}`)
        setTweet("")


        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={tweet} onChange={handleTweet} type="text" />
            <button type="submit">Tweet</button>

            

            
        </form>
    )
}

export default Inputbox
