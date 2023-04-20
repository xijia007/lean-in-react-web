import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllUsersThunk } from '../../services/user-thunk.js';
import UserItemByRole from './userListByRole.jsx';
import * as ROUTES from '../../constants/routes';

function AdminHome() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, []);
  console.log('From Admin: ', users);

  return (
    <div className="container">
      <h1>Admin Home</h1>
      <div className="row">
        <h2>Hi, LeanIn Admin</h2>

        {users &&
          users.map((user) => <UserItemByRole key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default AdminHome;
