import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/HomeNav';
import SearchPage from '../Search/SearchScreen';
import SearchDetailsPage from '../Search/SearchDetailsScreen';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignOutPage from '../SignOut';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AdminPage from '../Admin';
import ProfilePage from '../Profile';
import * as ROUTES from '../../constants/routes';
import EditProfileScreen from '../Profile/EditProfileScreen/index.jsx';
import AddExperienceScreen from '../Profile/experience/add-experience.jsx';
import AddEducationScreen from '../Profile/education/add-education.jsx';
import AdminHomePage from '../AdminHome';
import CompanyProfilePage from '../CompanyProfile/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <br/>
        <Routes>
          <Route exact path={ROUTES.SEARCH} element={<SearchPage />} />
          {/* <Route
            exact
            path={ROUTES.SEARCHDETAILS}
            element={<SearchDetailsPage />}
          /> */}
          {/* <Route exact path={`${ROUTES.SEARCHDETAILS}/*`} element={<SearchDetailsPage />} /> */}
          <Route
            exact
            path={`${ROUTES.SEARCHDETAILS}/:jobId`}
            element={<SearchDetailsPage />}
          />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route exact path={ROUTES.SIGN_OUT} element={<SignOutPage />} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            element={<PasswordForgetPage />}
          />
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
          <Route exact path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route exact path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route
            exact
            path={ROUTES.EDITPROFILE}
            element={<EditProfileScreen />}
          />
          <Route
            exact
            path={ROUTES.ADDEXPERIENCE}
            element={<AddExperienceScreen />}
          />
          <Route
            exact
            path={ROUTES.ADDEDUCATION}
            element={<AddEducationScreen />}
          />
          <Route path={`${ROUTES.PROFILE}/:userId`} element={<ProfilePage />} />
          <Route exact path={ROUTES.ADMINHOME} element={<AdminHomePage />} />
          <Route exact path={ROUTES.JOBS} element={<SearchPage />} />
          <Route exact path={ROUTES.COMPANYHOME} element={<HomePage />} />
          <Route
            exact
            path={ROUTES.COMPANY_PROFILE}
            element={<CompanyProfilePage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
