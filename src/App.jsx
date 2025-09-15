import { useState } from 'react'
import Left from './Left.jsx'
import Right from './GetVerified.jsx'
import Middle from './Middle.jsx'
import Tweets from './Tweets.jsx'
import SearchTweet from './SearchTweet.jsx'
import WhatsHappening from './WhatsHappening.jsx'
import WhoToFollow from './ProfileInfo.jsx'
import ProfileInfo from './ProfileInfo.jsx'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

import imgElon from './assets/images/elon.jpg'

import imgZuck from './assets/images/zuck.jpg'

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

    const filterTweets = (inputText) => {
        
        if (inputText.length < 1) {
            setTweets(initialTweets)
            return
        }
        setTweets(allTweets => allTweets.filter(tweet => tweet.content.toLowerCase().includes(inputText.toLowerCase())))}
        
    

    return (
        <div className="container">
            <aside className="left-side">
                <Left />
                 <div className='profile-card'>
                    <ProfileInfo 
                    profileImage={user.profileImage}
                    name = {user.name}
                    handle = {user.handle}/>
                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>

                    
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
                <SearchTweet onChange={(event => filterTweets(event.target.value))}/>
                <WhatsHappening/>
                
                <div className='widget'>
                    <h1>Who to follow</h1>   
                </div>
                <div className="follow-block">
                    <WhoToFollow
                    profileImage = {imgElon}
                    name = 'Elon Musk'
                    handle = '@elonmusk'/>
                     <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                        </div>
                            <div className="follow-block">
                        <WhoToFollow
                    profileImage = {imgZuck}
                    name = 'Mark Zuckerberg'
                    handle = '@markzuckerberg'/>   
                     <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                </div>
                
                       
                 
                <Right/>
            </aside>
            </div>
    )
}

export default App
