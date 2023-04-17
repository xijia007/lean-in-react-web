import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router";
import EditProfileScreen from './EditProfileScreen/index.jsx';
import ProfileScreen from './ProfileScreen';
import AddEducationScreen from './ProfileScreen/education/add-education';
import AddExperienceScreen from './ProfileScreen/experience/add-experience';
import JobsSideBar from "../JobsSideBar/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { findUserThunk } from "../../services/user-thunk.js";

function Profile() {
  // const { userId } = useParams();
  const {user} = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const {uid} = user;
  useEffect(() => {dispatch(findUserThunk(uid))}, []);

  return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Routes>
              <Route index element={<ProfileScreen />} />
              <Route path="edit-profile" element={<EditProfileScreen/>}/>
              <Route path="add-education" element={<AddEducationScreen />} />
              <Route path="add-experience" element={<AddExperienceScreen />} />
            </Routes>
          </div>
          <div className="col-3">
            <JobsSideBar/>
          </div>
        </div>
      </div>
  );
}

export default Profile;
