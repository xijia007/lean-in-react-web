/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'react-bootstrap-icons';
import { addEducation } from '../../Features/Profile/education-reducer';
import { addUserEducation } from '../../../services/user-service';
import { convertDateTimestamp } from '../../../utils/timeUtil';

function AddEducationScreen() {
  const [education, setEducation] = useState({
    entityName: '',
    role: '',
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
      entityName: school_name,
      role: degree,
      start,
      end,
      description,
    } = education;
    const educationObj = {
      description,
      school_name,
      degree,
      education_id: Date.now(),
      start_time: convertDateTimestamp(start),
      end_time: convertDateTimestamp(end),
    };

    // console.log('inside save button', educationObj);
    try {
      addUserEducation(uid, educationObj);
    } catch (error) {
      console.log(error);
    }
    dispatch(addEducation(educationObj));
    navigate(-1);
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
                  <b>Add Education</b>
                </h4>
              </div>
            </div>
          </div>

          <div className="list-group-item pt-4">
            <div className="row">
              <label className="col-sm-2 col-form-label">School</label>

              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Boston University"
                  value={education.entityName}
                  onChange={(e) =>
                    setEducation({ ...education, entityName: e.target.value })
                  }
                />
              </div>
            </div>
            <br />

            <div className="row">
              <label className="col-sm-2 col-form-label">Degree</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Bachelor's degree in Finance"
                  value={education.role}
                  onChange={(e) =>
                    setEducation({ ...education, role: e.target.value })
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
                  value={education.start}
                  onChange={(e) =>
                    setEducation({ ...education, start: e.target.value })
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
                  value={education.end}
                  onChange={(e) =>
                    setEducation({ ...education, end: e.target.value })
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
                  value={education.description}
                  style={{ height: '100px' }}
                  onChange={(e) =>
                    setEducation({ ...education, description: e.target.value })
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

export default AddEducationScreen;
