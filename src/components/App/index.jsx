import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import SearchPage from '../Search';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import ProfilePage from '../Profile';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <hr />
        <Routes>
          <Route exact path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            exact
            path={ROUTES.PASSWORD_FORGET}
            element={<PasswordForgetPage />}
          />
          <Route exact path={ROUTES.HOME} element={<HomePage />} />
          <Route exact path={`${ROUTES.PROFILE}/*`} element={<ProfilePage />} />
          {/*<Route exact path={`${ROUTES.PROFILE}${ROUTES.EDITPROFILE}`} element={<EditProfileScreen />} />*/}
          <Route exact path={ROUTES.ADMIN} element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
