import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { XLg } from 'react-bootstrap-icons';

import {
    addJob,
    deletePostJob,
    changePostJobScreen
} from '../../Features/CompanyHome/postJob-reducer';



function PostJobComponent() {
    const { userId } = useParams();
    const isMyProfile = userId === undefined;

    const { postJobs } = useSelector((state) => state.postjobs.postJobs);
    const { user } = useSelector((state) => state.userInfo);
    const { uid } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const postNewJobHandler = () => {
        dispatch(changePostJobScreen());
    };
    const deleteJobHandler = (id) => {
        dispatch(deletePostJob(id));
    };

    // useEffect(() => {
    //     async function fetchUserEducations() {
    //         const educationResponse = await getUserEducation(uid);
    //
    //         educationResponse.forEach((element) => {
    //             dispatch(addEducation(element));
    //         });
    //     }
    //
    //     if (uid) {
    //         fetchUserEducations(uid);
    //     }
    // }, [dispatch, uid]);

    return (
        <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
                <div className="pt-2 pb-2">
                    <h4>Job Posting</h4>
                </div>
                {isMyProfile && (
                    <div>
                        <button
                            className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                            onClick={() => {
                                postNewJobHandler();
                            }}
                        >
                            Post Job
                        </button>
                    </div>
                )}
            </div>
            {Array.isArray(postJobs) &&
                postJobs.map((e) => (
                    <div
                        key={e.id}
                        className="list-group-item d-flex justify-content-between"
                    >
                        <div>
                            <h5>{e.title}</h5>
                            <div>{e.company}</div>
                            <div>{`${e.start} - ${e.end}`}</div>
                            <div>{e.description}</div>
                        </div>
                        {isMyProfile && (
                            <div>
                                <h5
                                    className="clickable"
                                    onClick={() => deleteJobHandler(e.id)}
                                >
                                    <XLg />
                                </h5>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default PostJobComponent;
