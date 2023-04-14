import React from 'react';
import { Route, Routes } from 'react-router';
import EditProfileScreen from './EditProfileScreen/index.jsx';
import ProfileScreen from './ProfileScreen';
import AddEducationScreen from './ProfileScreen/education/add-education';
import AddExperienceScreen from './ProfileScreen/experience/add-experience';

function Profile() {
  return (
      <div className="container">
        <h2>profile screen</h2>
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
            <h2>saved jobs list</h2>
          </div>
        </div>
      </div>
  );
}

export default Profile;
