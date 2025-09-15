function Left({loggedInUser}) {

    return (
 <>
            
                <div className="logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="menu-item active">
                    <a href="#">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Explore
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bell"></i>
                        Notifications
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-envelope"></i>
                        Messages
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-bars"></i>
                        Lists
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bookmark"></i>
                        Bookmarks
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-circle-check"></i>
                        Verified
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-user"></i>
                        Profile
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-ellipsis"></i>
                        More
                    </a>
                </div>

                <button className="tweet-btn">Tweet</button>

                <div className='profile-card'>
                    <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>

                    <div className="profile-details">
                        <h4>{loggedInUser.name}</h4>
                        <small>{loggedInUser.handle}</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                </>

    )
    

} export default Left;