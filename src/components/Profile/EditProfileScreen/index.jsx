import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {updateUserInfo} from "../reducer/userInfo-reducer";
import "../index.css";

const EditProfileScreen = () => {
    const {user} = useSelector((state) => state.userInfo);
    const [userInfo, setUserInfo] = useState(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSaveButton = () => {
        dispatch(updateUserInfo(userInfo));
        navigate(-1);
    };
    return (
        <div className="container">
            <div className="list-group">
                <div className="list-group-item">
                    <button className="btn btn-primary rounded-pill float-end border-secondary border-1 mt-3" onClick={handleSaveButton}>Save</button>
                    <div className="d-flex justify-content-start">
                        <div><h3 className="mt-3"><i className="clickable bi bi-x-lg" onClick={() => navigate(-1)}></i></h3></div>
                        <div className="ms-4">
                            <h4><b>Edit Profile</b></h4>
                            <h5>{`${user.firstName} ${user.lastName}`}</h5>
                        </div>
                    </div>
                </div>

                <div className="list-group-item pt-4">
                    <form className="form-floating">
                        <input type="text" className="form-control"
                               placeholder="John" value={userInfo.firstName}
                               onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                        />
                        <label>First Name</label>
                    </form>
                    <br/>

                    <form className="form-floating">
                        <input type="text" className="form-control"
                               placeholder="Doe" value={userInfo.lastName}
                               onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                        />
                        <label>Last Name</label>
                    </form>
                    <br/>

                    <form className="form-floating">
                        <textarea className="form-control"
                                  placeholder="Add your skills..." value={userInfo.skills} rows={8} cols={40}
                                  onChange={(e) => setUserInfo({...userInfo, skills: e.target.value})}
                        />
                        <label>Skills</label>
                    </form>
                    <br/>

                    <form className="form-floating">
                        <textarea className="form-control"
                                  placeholder="Say something..." value={userInfo.bio} rows={8} cols={40}
                                  onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                        />
                        <label>Bio</label>
                    </form>
                    <br/>

                </div>

            </div>
        </div>
    );
};

export default EditProfileScreen;