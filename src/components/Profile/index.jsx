import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Route, Routes } from 'react-router';
import userInfoReducer from './reducer/userInfo-reducer';
import EditProfileScreen from './EditProfileScreen/index.jsx';
import ProfileScreen from './ProfileScreen';
import educationReducer from './reducer/education-reducer';
import AddEducationScreen from './ProfileScreen/education/add-education';
import experienceReducer from './reducer/experience-reducer';
import AddExperienceScreen from './ProfileScreen/experience/add-experience';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    education: educationReducer,
    experience: experienceReducer,
  },
});

function Profile() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default Profile;
