import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {deleteEducation} from "../../reducer/education-reducer";
import "../../index.css"
import { XLg } from "react-bootstrap-icons";

const EducationComponent = () => {
    const {educations} = useSelector((state) => state.education)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addEducationHandler = () => {navigate("/profile/add-education");};
    const deleteEducationHandler = (id) => {
        dispatch(deleteEducation(id))
    };

    return(
        <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
                <div className="p-3"><h4>Education</h4></div>
                <div>
                    <button
                        className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                        onClick={() => {
                            addEducationHandler();
                        }}
                    >Add Education</button>
                </div>
            </div>
            {educations && educations.map((e) =>
                <div key={e._id} className="list-group-item d-flex justify-content-between">
                    <div>
                        <h5>{e.entityName}</h5>
                        <div>{e.role}</div>
                        <div>
                            {`${e.start} - ${e.end}`}
                        </div>
                        <div>{e.description}</div>
                    </div>
                    <div>
                        <h5 className="clickable" onClick={() => deleteEducationHandler(e._id)}><XLg/></h5>
                    </div>

                </div>)}
        </div>
    );
};

export default EducationComponent;