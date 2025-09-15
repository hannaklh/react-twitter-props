import imgElon from './assets/images/elon.jpg'

import imgZuck from './assets/images/zuck.jpg'

function WhoToFollow({profileImage, name, handle}) {
    return(
        <>
                        <div className="profile-icon"><img src={profileImage}/></div>

                        <div className="content">
                            <h4>{name}</h4>
                            <h5>{handle}</h5>
                        </div>

        </>
    )
}
export default WhoToFollow;