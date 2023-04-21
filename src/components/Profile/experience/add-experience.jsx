import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {addExperience} from "../../Features/Profile/experience-reducer.jsx";
import { ArrowLeft } from "react-bootstrap-icons";


const AddExperienceScreen = () => {
    const [experience, setExperience] = useState({
        "entityName": "",
        "role": "",
        "start": "",
        "end": "",
        "description": ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveButton = () => {
        dispatch(addExperience(experience));
        navigate(-1);
    };

    return (
        <div className="container border border-1 border-opacity-75 p-3 rounded-4">
            <div className="border-bottom pb-3">
                <button className="btn btn-primary rounded-pill float-end mt-2" onClick={handleSaveButton}>Save</button>
                <div className="d-flex justify-content-start">
                    <div><h3 className="mt-3 clickable" onClick={() => navigate(-1)}><ArrowLeft/></h3></div>
                    <div className="ms-4 mt-3">
                        <h4><b>Add Experience</b></h4>
                    </div>
                </div>
            </div>
            <br/>

            <form className="row">
                <label className="col-sm-2 col-form-label">Company Name</label>

                <div className="col-sm-10">
                    <input type="text" className="form-control"
                           placeholder="Ex: Microsoft" value={experience.entityName}
                           onChange={(e) => setExperience({...experience, entityName: e.target.value})}
                    />
                </div>
            </form>
            <br/>

            <form className="row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                           placeholder="Ex: Retail Sales Manager" value={experience.role}
                           onChange={(e) => setExperience({...experience, role: e.target.value})}
                    />
                </div>
            </form>
            <br/>

            <form className="row">
                <label className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                           placeholder="mm/dd/yyyy" value={experience.start}
                           onChange={(e) => setExperience({...experience, start: e.target.value})}
                    />
                </div>
            </form>
            <br/>

            <form className="row">
                <label className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"
                           placeholder="mm/dd/yyyy" value={experience.start}
                           onChange={(e) => setExperience({...experience, start: e.target.value})}
                    />
                </div>
            </form>
            <br/>

            <form className="row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea className="form-control"
                              placeholder="Say something..." value={experience.description} style={{"height": "100px"}}
                              onChange={(e) => setExperience({...experience, description: e.target.value})}
                    />
                </div>
            </form>
            <br/>

        </div>
    );
}

export default AddExperienceScreen;