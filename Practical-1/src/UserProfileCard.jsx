import React, { useState } from "react";
import "./App.css"

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [isBioExpand, setIsBioExpand] = useState(false)

    const follow = () => {
        setIsFollowing(!isFollowing)
    }

    const Bio = () => {
        setIsBioExpand(!isBioExpand)
    }

    return (
        <div className="profile">
            <img src={profilePicture} alt="" height="250px" width="200px" className="profile-img" />
            <h2>{name},{age}</h2>
            <p>{location}</p>

            <div>
                <span>{isBioExpand ? bio : bio.slice(0, 100) + "..."}</span>
                <a href="#"onClick={Bio}>
                    {isBioExpand ? 'Read Less' : 'Read More'}
                </a>
            </div>

            <button onClick={follow} className="follow">
                {isFollowing ? "Unfollow" : "Follow"}
            </button>

        </div>
    )
}

export default UserProfileCard