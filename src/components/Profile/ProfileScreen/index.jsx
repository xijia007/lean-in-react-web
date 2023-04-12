import React from "react";
import UserInfoComponent from "./userInfo";
import ExperienceComponent from "./experience";
import EducationComponent from "./education";

const ProfileScreen = () => {
    return (
        <div>
            <UserInfoComponent/>
            <br/>
            <ExperienceComponent/>
            <br/>
            <EducationComponent/>
        </div>
    );
};

export default ProfileScreen;