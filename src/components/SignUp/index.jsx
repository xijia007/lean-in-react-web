import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllCompanies } from 'services/company-service';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  checkEmailAddress,
  checkFirstName,
  checkLastName,
  checkPassword,
  checkRetypePassword,
  updateOrgnization,
  updateUserRole,
  updateCompanyId,
} from '../Features/SignUp/SignUpSlice';
import { createUser } from '../../services/user-service';

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('user');
  const [companyList, setCompanyList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Please select');
  const handleFirstNameChange = (event) => {
    dispatch(checkFirstName(event.target.value));
  };
  const handleLastNameChange = (event) => {
    dispatch(checkLastName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(checkEmailAddress(event.target.value));
  };
  const handleOrgChange = (event) => {
    dispatch(updateOrgnization(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(checkPassword(event.target.value));
  };
  const handleRetypePwdChange = (event) => {
    dispatch(checkRetypePassword(event.target.value));
  };

  const handleRoleButtonClick = (event) => {
    const { id } = event.target;
    if (id !== 'company') {
      dispatch(updateCompanyId(''));
    }
    setSelectedButton(id);
    dispatch(updateUserRole(id));
  };

  const handleDropdownSelect = (eventKey) => {
    setSelectedOption(eventKey);
    dispatch(updateCompanyId(eventKey));
  };
  const submitStatus = useSelector((state) => state.signup.submitStatus);
  const {
    email,
    password,
    firstName,
    lastName,
    orgnization,
    role,
    userCompanyId,
  } = useSelector((state) => state.signup);
  const isCompanyUser = role === 'company';

  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await getAllCompanies();
      setCompanyList(response);
    };

    fetchCompanies();
  }, [submitStatus]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      firstName,
      lastName,
      orgnization,
      role,
      userCompanyId,
    };

    await createUser(user)
      .then((res) => {
        console.log(res);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Organization</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={handleOrgChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Retype Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Retype password"
              onChange={handleRetypePwdChange}
            />
          </div>

          <div className="form-group mt-3">
            <Form.Check
              type="radio"
              id="user"
              name="role"
              label="Job Seeker"
              onChange={handleRoleButtonClick}
              checked={selectedButton === 'user'}
            />
            <Form.Check
              type="radio"
              id="admin"
              name="role"
              label="Web Admin"
              onChange={handleRoleButtonClick}
              checked={selectedButton === 'admin'}
            />
            <Form.Check
              type="radio"
              id="company"
              name="role"
              label="Company"
              onChange={handleRoleButtonClick}
              checked={selectedButton === 'company'}
            />
          </div>

          {isCompanyUser && (
            <DropdownButton
              id="dropdown-basic-button"
              title={selectedOption}
              onSelect={handleDropdownSelect}
              className="form-group mt-3"
            >
              {companyList.map((company) => (
                <Dropdown.Item key={company.company_id} eventKey={company.name}>
                  {company.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          )}

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!submitStatus}
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
