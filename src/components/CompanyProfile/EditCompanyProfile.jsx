import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { ArrowLeft, XLg } from "react-bootstrap-icons";

const EditCompanyProfileScreen = () => {
  const { company } = useSelector((state) => state.company);
  const [companyInfo, setCompanyInfo] = useState(company);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSaveButton = async () => {
    // await dispatch(updateCompanyThunk(companyInfo));
    console.log("save companyinfo", companyInfo);
    navigate(-1);
  };
  return (
    <div className="container">
      <div className="list-group">
        <div className="list-group-item">
          <button className="btn btn-primary rounded-pill float-end mt-3" onClick={handleSaveButton}>Save</button>
          <div className="d-flex justify-content-start">
            <div><h3 className="mt-3 clickable" onClick={() => navigate(-1)}><ArrowLeft/></h3></div>
            <div className="ms-4">
              <h4><b>Edit Company Profile</b></h4>
              <h5>{companyInfo.name}</h5>
            </div>
          </div>
        </div>

        <div className="list-group-item pt-4">
          <form className="row">
            <label className="col-sm-2 col-form-label">Company Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                     placeholder="Ex: John" value={companyInfo.name}
                     onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
              />
            </div>
          </form>
          <br/>

          <form className="row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                     placeholder="Ex: add your company description..." value={companyInfo.description}
                     onChange={(e) => setCompanyInfo({...companyInfo, description: e.target.value})}
              />
            </div>
          </form>
          <br/>

          <form className="row">
            <label className="col-sm-2 col-form-label">Website url</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                     placeholder="Ex: https://..." value={companyInfo.url}
                     onChange={(e) => setCompanyInfo({...companyInfo, url: e.target.value})}
              />
            </div>
          </form>
          <br/>

        </div>

      </div>
    </div>
  );
};

export default EditCompanyProfileScreen;