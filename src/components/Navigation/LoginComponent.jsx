import Nav from 'react-bootstrap/Nav';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
// add logic for login or logout
function LoginComponent({ isLogined }) {
  // const logined = useSelector((state) => state.login.logined);
  if (isLogined) {
    return <Nav.Link href="/signout">Log Out</Nav.Link>;
  }
  return <Nav.Link href="/signin">Login</Nav.Link>;
}

export default LoginComponent;
