import React from 'react';
// import { useDispatch } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAuthUserThunk } from "services/user-thunk.js";
import { deleteAuthUser } from "services/user-service.js";
import { deleteUser } from "components/Features/admin/users-reducer.jsx";

function UserItemByRole({ user = { firstName: '', lastName: '', role: '', userCompanyId: 0, uid: ''} }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const visitProfile = () => {
    if (user.role === 'user') {
      return navigate(`../profile/${user.uid}`);
    }
    if (user.role === 'company') {
      return navigate(`../company-profile/${user.userCompanyId}`);
    }
    return "";
  }

  return (
    <div className="card">
      <div className="card-body">
        <h6 className={`card-title ${user.role === 'admin' ? "" : "clickable"}`} onClick={visitProfile}>
            User Name: {user.firstName} {user.lastName}
        </h6>
        <h6 className="card-text text-muted">Role: {user.role}</h6>
        <h6 className="card-text text-muted">User ID: {user.uid}</h6>
        <h6 className="card-text text-muted">Email: {user.email}</h6>
        {user.role !== "admin" &&
          <button
            className="btn btn-primary rounded-pill mt-2 float-end"
            onClick={() => {
              deleteAuthUser(user.uid);
              dispatch(deleteUser(user.uid));
              console.log("delete uid", user.uid)
            }}
          >
            Delete
          </button>
        }

      </div>
    </div>
  );
}

export default UserItemByRole;
