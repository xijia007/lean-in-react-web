import React from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

function UserItemByRole({ user = { firstName: '', lastName: '', role: '' } }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <h6>
            User Name: {user.firstName} {user.lastName}
          </h6>
        </h5>
        <h6 className="card-text text-muted">Role: {user.role}</h6>
        <h6 className="card-text text-muted">User ID: {user.uid}</h6>
        <h6 className="card-text text-muted">Email: {user.email}</h6>
        <button
          className="btn btn-primary rounded-pill mt-2 float-end"
          onClick={() => {
            navigate(`/admin/user/${user.uid}`);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserItemByRole;
