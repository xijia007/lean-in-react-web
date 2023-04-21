import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findCompany } from "../../services/company-service.js";
import { findCompanyThunk } from "../../services/company-thunk.js";


function CompanyHome() {

  return (
    <div className="container">
      <h2>Hi, LeanIn Company</h2>
      <h1>Company Home Page</h1>
    </div>
  );
}

export default CompanyHome;
