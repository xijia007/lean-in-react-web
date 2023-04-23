/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'react-bootstrap-icons';
import { addJob, changePostJobScreen } from "../../Features/CompanyHome/postJob-reducer.jsx";
import { v4 as uuidv4 } from 'uuid';
import { convertDateTimestamp } from '../../../utils/timeUtil';
function PostNewjobScreen() {
    const [company , setCompany] = useState("");
    const [title , setTitle] = useState("");
    const [start , setStart] = useState("");
    const [end , setEnd] = useState("");
    const [description , setDescription] = useState("");
    const { uid } = useSelector((state) => state.userInfo.user);
    const  postJobScreen = useSelector((state) => state.postjobs.postJobScreen);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveButton = (e) => {
        e.preventDefault();
        const uniqueId = uuidv4();
        const newjob = {
            _id: uniqueId,
            company: company,
            description: description,
            title: title,
            start: start,
            end: end,
        }
        console.log(start);
        dispatch(changePostJobScreen());
        dispatch(addJob(newjob));

    };


    const handleBackArrow = (e) =>{
        dispatch(changePostJobScreen());
    }

    return (
        <div className="container">
            <form>
                <div className="list-group">
                    <div className="list-group-item">
                        <button
                            type="submit"
                            className="btn btn-primary rounded-pill float-end border-secondary border-1 mt-2"
                            onClick={handleSaveButton}
                        >
                            Save
                        </button>
                        <div className="d-flex justify-content-start mt-3">
                            <div>
                                <h3 className="clickable" onClick={() => {
                                handleBackArrow();
                            }}>
                                    <ArrowLeft />
                                </h3>
                            </div>
                            <div className="ms-4">
                                <h4>
                                    <b>Post Job</b>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item pt-4">
                        <div className="row">
                            <label className="col-sm-2 col-form-label">Job Title</label>

                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: Software Development Engineer"
                                    value={title}
                                    onChange={(e) =>
                                        setTitle(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Company</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: Amazon"
                                    value={company}
                                    onChange={(e) =>
                                        setCompany(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Application Start Date</label>
                            <div className="col-sm-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="mm/dd/yyyy"
                                    value={start}
                                    onChange={(e) =>
                                        setStart(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Application End Date</label>
                            <div className="col-sm-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="mm/dd/yyyy"
                                    value={end}
                                    onChange={(e) =>
                                        setEnd(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                <textarea
                    className="form-control"
                    placeholder="Say something..."
                    value={description}
                    style={{ height: '100px' }}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PostNewjobScreen;
