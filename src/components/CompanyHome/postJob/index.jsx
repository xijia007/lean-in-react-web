import React from 'react';
import {  useSelector } from 'react-redux';
import PostJobComponent from './JobComponent';
import PostNewjobScreen from './postNewJob';
function PostJob(){
    const  postJobScreen = useSelector((state) => state.postjobs.postJobScreen);

    return(
        <>
            {
                postJobScreen?(
                    <PostJobComponent />
                ):(
                    <PostNewjobScreen />
                )
            }
        </>
    )

}

export default PostJob;