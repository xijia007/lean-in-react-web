import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {deleteExperience} from "../../reducer/experience-reducer";
import {XLg} from "react-bootstrap-icons";

const ExperienceComponent = () => {
    const {experiences} = useSelector((state) => state.experience)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addExperienceHandler = () => {navigate("/profile/add-experience");};
    const deleteExperienceHandler = (id) => {
        dispatch(deleteExperience(id))
    };

    return(
        <div className="list-group">
            <div className="list-group-item d-flex justify-content-between">
                <div className="p-3"><h4>Experience</h4></div>
                <div>
                    <button
                        className="btn btn-primary rounded-pill border-secondary border-1 mt-2 float-end"
                        onClick={() => {
                            addExperienceHandler();
                        }}
                    >Add Experience</button>
                </div>
            </div>
            {experiences && experiences.map((e) =>
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
                        <h5 className="clickable" onClick={() => deleteExperienceHandler(e._id)}><XLg/></h5>
                    </div>
                </div>)}
        </div>
    );
};

export default ExperienceComponent;