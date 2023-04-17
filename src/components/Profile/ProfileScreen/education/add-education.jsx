import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addEducation} from "../../../Features/Profile/education-reducer.jsx";
import {useNavigate} from "react-router";
import { ArrowLeft } from "react-bootstrap-icons";


const AddEducationScreen = () => {
    const [education, setEducation] = useState({
        "entityName": "",
        "role": "",
        "start": "",
        "end": "",
        "description": ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveButton = () => {
        dispatch(addEducation(education));
        navigate(-1);
    };

    return (
        <div className="container">
          <div className="list-group">
            <div className="list-group-item">
              <button className="btn btn-primary rounded-pill float-end border-secondary border-1 mt-2" onClick={handleSaveButton}>Save</button>
              <div className="d-flex justify-content-start mt-3">
                <div><h3 className="clickable" onClick={() => navigate(-1)}><ArrowLeft/></h3></div>
                <div className="ms-4">
                  <h4><b>Add Education</b></h4>
                </div>
              </div>
            </div>

            <div className="list-group-item pt-4">
              <form className="row">
                <label className="col-sm-2 col-form-label">School</label>

                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         placeholder="Ex: Boston University" value={education.entityName}
                         onChange={(e) => setEducation({...education, entityName: e.target.value})}
                  />
                </div>
              </form>
              <br/>

              <form className="row">
                <label className="col-sm-2 col-form-label">Degree</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         placeholder="Ex: Bachelor's degree in Finance" value={education.role}
                         onChange={(e) => setEducation({...education, role: e.target.value})}
                  />
                </div>
              </form>
              <br/>

              <form className="row">
                <label className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         placeholder="mm/dd/yyyy" value={education.start}
                         onChange={(e) => setEducation({...education, start: e.target.value})}
                  />
                </div>
              </form>
              <br/>

              <form className="row">
                <label className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         placeholder="mm/dd/yyyy" value={education.start}
                         onChange={(e) => setEducation({...education, start: e.target.value})}
                  />
                </div>
              </form>
              <br/>

              <form className="row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea className="form-control"
                              placeholder="Say something..." value={education.description} style={{"height": "100px"}}
                              onChange={(e) => setEducation({...education, description: e.target.value})}
                    />
                </div>
              </form>
              <br/>
            </div>

          </div>

        </div>
    );
}

export default AddEducationScreen;