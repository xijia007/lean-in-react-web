import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router";
import {deleteExperience} from "../../Features/Profile/experience-reducer.jsx";
import {XLg} from "react-bootstrap-icons";

const ExperienceComponent = () => {
    const { userId } = useParams();
    const isMyProfile = userId === undefined;

    const {experiences} = useSelector((state) => state.experience)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addExperienceHandler = () => {navigate("/add-experience");};
    const deleteExperienceHandler = (id) => {
        dispatch(deleteExperience(id))
    };

    return(
        <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
                <div className="pt-2 pb-2"><h4 className="fw-bold">Experience</h4></div>
                {isMyProfile &&
                  <div>
                      <button
                        className="btn btn-primary rounded-pill mt-2 float-end"
                        onClick={() => {
                            addExperienceHandler();
                        }}
                      >Add Experience</button>
                  </div>
                }
            </div>
            {experiences && experiences.map((e) =>
                <div key={e._id} className="list-group-item d-flex justify-content-between">
                    <div>
                        <h5 className="fw-bold">{e.entityName}</h5>
                        <div>{e.role}</div>
                        <div>
                            {`${e.start} - ${e.end}`}
                        </div>
                        <div>{e.description}</div>
                    </div>
                    {isMyProfile &&
                      <div>
                          <h5 className="clickable" onClick={() => deleteExperienceHandler(e._id)}><XLg/></h5>
                      </div>
                    }

                </div>)}
        </div>
    );
};

export default ExperienceComponent;