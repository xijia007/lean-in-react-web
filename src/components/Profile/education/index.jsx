import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { XLg } from 'react-bootstrap-icons';
import {
  addEducation, clearEducation,
  deleteEducation
} from "../../Features/Profile/education-reducer";
import {
  getUserEducation,
  deleteUserEducation,
} from '../../../services/user-service';

function EducationComponent() {
  const { userId } = useParams();
  const isMyProfile = userId === undefined;

  const { educations } = useSelector((state) => state.education);
  const { user } = useSelector((state) => state.userInfo);
  const { uid } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addEducationHandler = () => {
    navigate('/add-education');
  };
  const deleteEducationHandler = (id) => {
    deleteUserEducation(uid, id);
    dispatch(deleteEducation(id));
  };

  useEffect(() => {
    async function fetchUserEducations() {
      if (userId) {
        const educationResponse = await getUserEducation(userId);
        if (Object.keys(educationResponse).length === 0) {
          dispatch(clearEducation());
          return;
        }
        educationResponse.forEach((element) => {
          dispatch(addEducation(element));
        });
        return;
      }
      const educationResponse = await getUserEducation(uid);

      educationResponse.forEach((element) => {
        dispatch(addEducation(element));
      });
    }
    //
    // if (uid) {
    //   fetchUserEducations(uid);
    // }
    fetchUserEducations();
  }, [dispatch, uid]);

  return (
    <div className="list-group">
      <div className="list-group-item d-flex justify-content-between">
        <div className="pt-2 pb-2">
          <h4 className="fw-bold">Education</h4>
        </div>
        {isMyProfile && (
          <div>
            <button
              className="btn btn-primary rounded-pill mt-2 float-end"
              onClick={() => {
                addEducationHandler();
              }}
            >
              Add Education
            </button>
          </div>
        )}
      </div>
      {Array.isArray(educations) &&
        educations.map((e) => (
          <div
            key={e.id}
            className="list-group-item d-flex justify-content-between"
          >
            <div>
              <h5 className="fw-bold">{e.entityName}</h5>
              <div>{e.role}</div>
              <div>{`${e.start} - ${e.end}`}</div>
              <div>{e.description}</div>
            </div>
            {isMyProfile && (
              <div>
                <h5
                  className="clickable"
                  onClick={() => deleteEducationHandler(e.id)}
                >
                  <XLg />
                </h5>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default EducationComponent;
