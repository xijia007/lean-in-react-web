import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import postedJobs from "../Features/CompanyHome/postedJobs.jsx";
import postJobs from "../Features/CompanyHome/postJobs.jsx";



function CompanyHome() {

    const { user: userInfo } = useSelector((state) => state.userInfo);


  return (
    <div className="container">
      <h1>Company Home Page</h1>
        <div className="row">
            <div className="col-9">
                <div className="list-group">
                    <div className="list-group-item p-3">
                        <div>
                            <postJobs/>
                        </div>



                    </div>
                </div>

            </div>
            <div className="col-3">
                <postedJobs/>
            </div>
        </div>
    </div>
  );
}

export default CompanyHome;
