import React from "react";
import UserProfileCard from "./UserProfileCard";

const StyledComponent = ({ isStyled, userData }) => {
    return (
        <div class={isStyled ? 'ComponentIsStyled' : 'NotStyled flbtn'}>
            <UserProfileCard
                name={userData.name}
                age={userData.age}
                bio={userData.bio}
                location={userData.location}
                profilePicture={userData.profilePicture}
            />
             <p><strong>This is a {isStyled ? 'Styled' : 'Default'} Component</strong></p>
        </div>
    )
}

export default StyledComponent