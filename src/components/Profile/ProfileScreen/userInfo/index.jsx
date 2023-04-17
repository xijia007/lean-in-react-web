import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {useNavigate} from "react-router";
import { currentUserProfileThunk, findUserThunk } from "../../../../services/user-thunk.js";


const UserInfoComponent = () => {
    const {user} = useSelector((state) => state.userInfo);
    const navigate = useNavigate();

    console.log("current user", user)

    return(
        <div className="list-group">
            <div className="list-group-item p-3">
                <div>
                    <button
                        className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                        onClick={() => {
                            navigate('/profile/edit-profile');
                        }}
                    >Edit profile</button>
                    <h3 className="fa-bold">{`${user.firstName} ${user.lastName}`}</h3>
                </div>

                <p className="mb-2">{user.bio}</p>
                <p className="mb-2">{user.skills ? `Skills: ${user.skills}` : "Add your skills..."}</p>

                {user.jobsApplied && user.jobsSaved &&
                  <div className="d-flex justify-content-start text-secondary">
                    <div className="flex-box"><i className="bi bi-clipboard2-check"></i><span
                      className="ms-1">{`Applied ${user.jobsApplied} jobs`}</span></div>
                    <div className="flex-box ms-3"><i className="bi bi-bookmark"></i><span
                      className="ms-1">{`Saved ${user.jobsSaved} jobs`}</span></div>
                </div>}
            </div>
        </div>
    );
};

export default UserInfoComponent;