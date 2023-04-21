import {useSelector} from "react-redux";
import React from "react";


const ProfileCard = () => {
    const {user} = useSelector((state) => state.userInfo);

    return(
        <div className="list-group">
            <div className="list-group-item p-3">
                <h4 className="mb-2 fw-bold">{user.firstName} {user.lastName}</h4>
                <p className="mb-2">{user.bio}</p>
                <p className="mb-2">{`Skills: ${user.skills ? user.skills : "add your skills..."}`}</p>

            </div>
        </div>
    );
};

export default ProfileCard;