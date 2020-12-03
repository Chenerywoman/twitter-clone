import React, {useState} from 'react'


function Inputbox() {
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
        setInput (e.target.value)
        console.log(`handle${input}`)

    }

    const handleSubmit = (e) => {
        console.log(`submit${input}`)
        setCompletedTweet({...completedTweet, tweet: input
        })

        console.log(completedTweet);




        setInput("")


        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleTweet} type="text" />
            <button type="submit">Tweet</button>

            

            
        </form>
    )
}

export default Inputbox
