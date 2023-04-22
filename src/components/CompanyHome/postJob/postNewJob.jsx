/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'react-bootstrap-icons';
import { addJob } from "../../Features/CompanyHome/postJob-reducer.jsx";

import { convertDateTimestamp } from '../../../utils/timeUtil';

function postNewjobScreen() {
    const [job, setJob] = useState({
        company: '',
        title: '',
        start: '',
        end: '',
        description: '',
    });

    const { uid } = useSelector((state) => state.userInfo.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveButton = (e) => {
        e.preventDefault();

        const {
            company: company_name,
            title: job_title,
            start,
            end,
            description,
        } = newJob;
        const newJobObj = {
            description,
            company_name,
            job_title,
            new_id: Date.now(),
            start_time: convertDateTimestamp(start),
            end_time: convertDateTimestamp(end),
        };



    };

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
                                <h3 className="clickable" onClick={() => navigate(-1)}>
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
                                    value={job.title}
                                    onChange={(e) =>
                                        setJob({ ...job, title: e.target.value })
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
                                    value={job.company}
                                    onChange={(e) =>
                                        setJob({ ...job, company: e.target.value })
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
                                    value={job.start}
                                    onChange={(e) =>
                                        setJob({ ...job, start: e.target.value })
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
                                    value={job.end}
                                    onChange={(e) =>
                                        setJob({ ...job, end: e.target.value })
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
                    value={job.description}
                    style={{ height: '100px' }}
                    onChange={(e) =>
                        setJob({ ...job, description: e.target.value })
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

export default postNewjobScreen;
