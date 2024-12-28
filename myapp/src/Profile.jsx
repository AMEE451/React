import React from "react";

const Profile=({img,role,height,width})=>{
    return(
        <div>
            <img src={img} alt="" 
            style={{
                height:height?height:"300px",
                width:width?width:"200px"
            }}
            />
            <h2>{role}</h2>
        </div>
    )
}
export default Profile