import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { findCompany } from '../../services/company-service';
import { findCompanyThunk } from '../../services/company-thunk';
import RecentJobList from '../Home/recentJobLists/index';

function CompanyProfile() {
  const { companyId } = useParams();
  const { company } = useSelector((state) => state.company);
  const { user } = useSelector((state) => state.userInfo);
  const { userCompanyId } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMyCompany = companyId === undefined;
  const [companyInfo, setCompanyInfo] = useState(company);
  useEffect(() => {
    async function fetchCompany() {
      if (companyId) {
        const company = await findCompany(companyId);
        console.log("View other company's profile", company);
        setCompanyInfo(company);
        return;
      }
      console.log('user company id', userCompanyId);
      const response = await dispatch(findCompanyThunk(userCompanyId));
      setCompanyInfo(response.payload);
      console.log('View my company profile', response.payload);
    }
    fetchCompany();
  }, [companyId]);

  return (
    <div className="container">
      <h1>Company Profile Page</h1>
      <div className="list-group">
        <div className="list-group-item p-3">
          <div>
            {isMyCompany && (
              <button
                className="btn btn-primary rounded-pill mt-2 float-end"
                onClick={() => {
                  navigate('/edit-company-profile');
                }}
              >
                Edit profile
              </button>
            )}

            <h2 className="fw-bold">{companyInfo.name}</h2>
          </div>

          <p className="mb-2">{companyInfo.description}</p>
          <p className="mb-2">
            <Link to={companyInfo.url}>Company Website</Link>
          </p>
        </div>
      </div>

      <br />
      <RecentJobList />
    </div>
  );
}

export default CompanyProfile;
