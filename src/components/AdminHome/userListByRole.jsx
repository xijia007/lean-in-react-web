import React from 'react';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const UserItemByRole = ({
  user = { firstName: '', lastName: '', role: '' },
}) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <h5>
            User Name: {user.firstName} {user.lastName}
          </h5>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">Role: {user.role}</h6>
        <button
          className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
          onClick={() => {
            navigate(`/admin/user/${user.uid}`);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default UserItemByRole;
