import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {updateUser} from "../../Features/Profile/user-reducer.jsx";
import { ArrowLeft, XLg } from "react-bootstrap-icons";
import { updateUserThunk } from "../../../services/user-thunk.js";

const EditProfileScreen = () => {
    const {user} = useSelector((state) => state.userInfo);
    const [userInfo, setUserInfo] = useState(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSaveButton = async () => {
        await dispatch(updateUserThunk(userInfo));
        console.log("save userinfo", userInfo);
        navigate(-1);
    };
    return (
        <div className="container">
            <div className="list-group">
                <div className="list-group-item">
                    <button className="btn btn-primary rounded-pill float-end border-secondary border-1 mt-3" onClick={handleSaveButton}>Save</button>
                    <div className="d-flex justify-content-start">
                        <div><h3 className="mt-3 clickable" onClick={() => navigate(-1)}><ArrowLeft/></h3></div>
                        <div className="ms-4">
                            <h4><b>Edit Profile</b></h4>
                            <h5>{`${user.firstName} ${user.lastName}`}</h5>
                        </div>
                    </div>
                </div>

                <div className="list-group-item pt-4">
                    <form className="row">
                        <label className="col-sm-2 col-form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   placeholder="Ex: John" value={userInfo.firstName}
                                   onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                            />
                        </div>
                    </form>
                    <br/>

                    <form className="row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"
                                   placeholder="Ex: Doe" value={userInfo.lastName}
                                   onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                            />
                        </div>
                    </form>
                    <br/>

                    <form className="row">
                        <label className="col-sm-2 col-form-label">Skills</label>
                        <div className="col-sm-10">
                            <textarea className="form-control"
                                      placeholder="Ex: I am good at ..." value={userInfo.skills} rows={3} cols={40}
                                      onChange={(e) => setUserInfo({...userInfo, skills: e.target.value})}
                            />
                        </div>
                    </form>
                    <br/>

                    <form className="row">
                        <label className="col-sm-2 col-form-label">Bio</label>
                        <div className="col-sm-10">
                            <textarea className="form-control"
                                      placeholder="Ex: I love..." value={userInfo.bio} rows={4} cols={40}
                                      onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                            />
                        </div>
                    </form>
                    <br/>

                </div>

            </div>
        </div>
    );
};

export default EditProfileScreen;