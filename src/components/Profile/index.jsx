import React, { useEffect, useState } from "react";
import ExperienceComponent from "./experience/index.jsx";
import EducationComponent from "./education/index.jsx";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../services/user-service.js";
import { findUserThunk } from "../../services/user-thunk.js";
import { useNavigate } from "react-router-dom";
import JobsSideBar from "../JobsSideBar/index.jsx";

const ProfileScreen = () => {
    const { userId } = useParams();
    const {user} = useSelector((state) => state.userInfo);
    const [userInfo, setUserInfo] = useState(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {uid} = user;
    const isMyProfile = userId === undefined;
    // console.log("type of userId", typeof userId)

    useEffect( () => {
      async function fetchProfile() {
        if (userId) {
          const user = await findUser(userId);
          setUserInfo(user);
          console.log("View Other's profile", user);
          return;
        }
        const response = await dispatch(findUserThunk(uid));
        setUserInfo(response.payload);
        console.log("View my profile", response.payload)
      }
      fetchProfile();
    }, [userId]);

    return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="list-group">
                <div className="list-group-item p-3">
                  <div>
                    {isMyProfile &&
                      <button
                        className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                        onClick={() => {
                          navigate('/edit-profile');
                        }}
                      >Edit profile</button>
                    }

                    <h3 className="fa-bold">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
                  </div>

                  <p className="mb-2">{userInfo.bio}</p>
                  <p className="mb-2">{userInfo.skills ? `Skills: ${userInfo.skills}` : "Add your skills..."}</p>

                  {userInfo.jobsApplied && userInfo.jobsSaved &&
                    <div className="d-flex justify-content-start text-secondary">
                      <div className="flex-box"><i className="bi bi-clipboard2-check"></i><span
                        className="ms-1">{`Applied ${userInfo.jobsApplied} jobs`}</span></div>
                      <div className="flex-box ms-3"><i className="bi bi-bookmark"></i><span
                        className="ms-1">{`Saved ${userInfo.jobsSaved} jobs`}</span></div>
                    </div>}
                </div>
              </div>
              <br/>
              <ExperienceComponent/>
              <br/>
              <EducationComponent isMyProfile={isMyProfile}/>
            </div>
            <div className="col-3">
              <JobsSideBar/>
            </div>
          </div>

        </div>
    );
};

export default ProfileScreen;