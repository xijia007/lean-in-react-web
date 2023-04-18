import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllUsersThunk } from "../../services/user-thunk.js";
import UserItem from "./userListItem.jsx";

function Admin() {
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllUsersThunk())}, []);
  console.log("From Admin: ", users);

  return (
    <div className="container">
      <h1>Admin</h1>
      <ul className="list-group">
        <h2>Hi, LeanIn Admin</h2>
        {users && users.map(user => <UserItem key={user.id} user={user}/>)}
      </ul>
    </div>
  );
}

export default Admin;
