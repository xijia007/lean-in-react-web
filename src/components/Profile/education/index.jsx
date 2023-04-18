import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router";
import {deleteEducation} from "../../Features/Profile/education-reducer.jsx";
// import "../../index.css"
import { XLg } from "react-bootstrap-icons";

const EducationComponent = () => {
    const { userId } = useParams();
    const isMyProfile = userId === undefined;

    const {educations} = useSelector((state) => state.education)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addEducationHandler = () => {navigate("/add-education");};
    const deleteEducationHandler = (id) => {
        dispatch(deleteEducation(id))
    };

    return(
        <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
                <div className="pt-2 pb-2"><h4>Education</h4></div>
                {isMyProfile &&
                  <div>
                      <button
                        className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                        onClick={() => {
                            addEducationHandler();
                        }}
                      >Add Education</button>
                  </div>
                }
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
                    {isMyProfile &&
                      <div>
                          <h5 className="clickable" onClick={() => deleteEducationHandler(e._id)}><XLg/></h5>
                      </div>
                    }

                </div>)}
        </div>
    );
};

export default EducationComponent;