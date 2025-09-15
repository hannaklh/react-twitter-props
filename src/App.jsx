import { useState } from 'react'
import Left from './Left.jsx'
import Right from './Right.jsx'
import Middle from './Middle.jsx'
import Tweets from './Tweets.jsx'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'


function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
             
        ])
        setCreateTweetContent('')
    }

    return (
        <div className="container">
            <aside className="left-side">
                <Left 
                    loggedInUser={loggedInUser}/>
        </aside>
                 <main>
                    <Middle 
                    loggedInUser = {loggedInUser}
                    addTweet={addTweet}
                    createTweetContent={createTweetContent}
                    setCreateTweetContent={setCreateTweetContent} />
                                         
                    <Tweets
                    tweets ={tweets}/>

                </main>

            <aside className='right-side'>
                <Right />
            </aside>
            </div>
    )
}

export default App
