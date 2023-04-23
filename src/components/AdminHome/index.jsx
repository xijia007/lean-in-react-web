import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions
import { findAllUsersThunk } from '../../services/user-thunk.js';
// eslint-disable-next-line import/extensions
import UserItemByRole from './userListByRole.jsx';

function AdminHome() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk());
  }, []);
  console.log('From Admin: ', users);

  return (
    <div className="container">
      {/* <h2>Hi, LeanIn Admin</h2> */}
      <div className="row">
        <div className="col-4">
          {' '}
          <h3>Job Seeker List</h3>
          {users
            .filter((user) => user.role === 'user')
            .map((user) => (
              <UserItemByRole key={user.id} user={user} />
            ))}
        </div>
        <div className="col-4">
          {' '}
          <h3>Company List</h3>
          {users
            .filter((user) => user.role === 'company')
            .map((user) => (
              <UserItemByRole key={user.id} user={user} />
            ))}
        </div>
        <div className="col-4">
          {' '}
          <h3>Admin List</h3>
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
