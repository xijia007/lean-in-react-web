import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/HomeNav';
import SearchPage from '../Search';
import SearchDetailsPage from '../SearchDetails';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AdminPage from '../Admin';
// eslint-disable-next-line no-unused-vars
import EditProfilePage from '../EditProfile';
import ProfilePage from '../Profile';
import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <Routes>
          <Route exact path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route
            exact
            path={ROUTES.SEARCHDETAILS}
            element={<SearchDetailsPage />}
          />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            element={<PasswordForgetPage />}
          />
          <Route exact path={ROUTES.HOME} element={<HomePage />} />

          <Route exact path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route exact path={`${ROUTES.PROFILE}/*`} element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
