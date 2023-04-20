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
      <div className="row">
        <h2>Hi, LeanIn Admin</h2>
        <div className="col-4">
          {' '}
          <h3>Job Seeker Role List</h3>
          {users
            .filter((user) => user.role === 'user')
            .map((user) => (
              <UserItemByRole key={user.id} user={user} />
            ))}
        </div>
        <div className="col-4">
          {' '}
          <h3>Company Role List</h3>
          {users
            .filter((user) => user.role === 'company')
            .map((user) => (
              <UserItemByRole key={user.id} user={user} />
            ))}
        </div>
        <div className="col-4">
          {' '}
          <h3>Admin Role List</h3>
          {users
            .filter((user) => user.role === 'admin')
            .map((user) => (
              <UserItemByRole key={user.id} user={user} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
