import React from "react";
import {useDispatch} from "react-redux";
import { deleteUserThunk } from "../../services/user-thunk.js";
import { useNavigate } from "react-router-dom";

const UserItem = ({ user = {firstName: "", lastName: "", role: ""} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteUserHandler = (id) => {
    // dispatch(deleteUserThunk(id));
  }

  return(
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <h2 className="clickable" onClick={() => navigate(`/profile/${user.uid}`)}>{`${user.firstName} ${user.lastName}`}</h2>
        <h4>{`Role: ${user.role}`}</h4>
      </div>
      <div>
        <button
          onClick={() => deleteUserHandler(user.id)}
          className="btn btn-danger float-end mt-3">Delete User</button>
      </div>
    </li>
  );
};

export default UserItem;