import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {addExperience} from "../../Features/Profile/experience-reducer.jsx";
import { ArrowLeft } from "react-bootstrap-icons";
import { convertDateTimestamp } from "../../../utils/timeUtil.js";
import { addUserEducation, addUserExperience } from "../../../services/user-service.js";
import { addEducation } from "../../Features/Profile/education-reducer.js";


const AddExperienceScreen = () => {
    const [experience, setExperience] = useState({
        entityName: "",
        role: "",
        start: "",
        end: "",
        description: "",
    });
    const { uid } = useSelector((state) => state.userInfo.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSaveButton = (e) => {
      e.preventDefault();

      const {
        entityName,
        role,
        start,
        end,
        description,
      } = experience;
      const experienceObj = {
        description,
        entityName,
        role,
        experience_id: Date.now().toString(),
        start_time: convertDateTimestamp(start),
        end_time: convertDateTimestamp(end),
      };

      try {
        addUserExperience(uid, experienceObj);
      } catch (error) {
        console.log(error);
      }
      dispatch(addExperience(experienceObj));
      navigate(-1);
    };

    return (
      <div className="container">
        <form>
          <div className="list-group">
            <div className="list-group-item">
              <button
                type="submit"
                className="btn btn-primary rounded-pill float-end mt-2"
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
                    <b>Add Experience</b>
                  </h4>
                </div>
              </div>
            </div>

            <div className="list-group-item pt-4">
              <div className="row">
                <label className="col-sm-2 col-form-label">Entity Name</label>

                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: Tesla"
                    value={experience.entityName}
                    onChange={(e) =>
                      setExperience({ ...experience, entityName: e.target.value })
                    }
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: Software Engineer"
                    value={experience.role}
                    onChange={(e) =>
                      setExperience({ ...experience, role: e.target.value })
                    }
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <label className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="mm/dd/yyyy"
                    value={experience.start}
                    onChange={(e) =>
                      setExperience({ ...experience, start: e.target.value })
                    }
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <label className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="mm/dd/yyyy"
                    value={experience.end}
                    onChange={(e) =>
                      setExperience({ ...experience, end: e.target.value })
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
                  value={experience.description}
                  style={{ height: '100px' }}
                  onChange={(e) =>
                    setExperience({ ...experience, description: e.target.value })
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

export default AddExperienceScreen;