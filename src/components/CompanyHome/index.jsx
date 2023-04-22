import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux";
import PostJob from './postJob';
import PostedJobsComponent from './postedJob';

function CompanyHome() {

    const userInfo = useSelector((state) =>
    state.userInfo.user
     );


  return (
    <div className="container">
      <h1>Company Home Page</h1>
        <div className="row">
            <div className="col-9">
                <div className="list-group">
                    <div className="list-group-item p-3">
                        <div>
                            <PostJob />
                        </div>



                    </div>
                </div>

            </div>
            <div className="col-3">
                <PostedJobsComponent/>
            </div>
        </div>
    </div>
  );
}

export default CompanyHome;
