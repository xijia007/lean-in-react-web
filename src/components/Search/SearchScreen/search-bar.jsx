import React, { useState } from "react";
import axios from "axios";
import searchJobByKeyword from "./search-job-service";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    // const { searchTerm } = useParams();
    // const navigate = useNavigate();
    // const [search, setSearch] = useState(searchTerm);
    const [search, setSearch] = useState("");
    console.log("searching: ", search)
    const [results, setResults] = useState({});

    const searchJobsByKeyword = async () => {
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {query: search, page: '1', num_pages: '1'},
            headers: {
              'X-RapidAPI-Key': 'f2a0361d41msh2ff7d2d6a6963bdp16613ajsn2eeffd075db5',
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
          };
        axios.request(options).then(function (response) {
            console.log("response.data.data: ",response.data.data);
            console.log("response: ",response);
            setResults(response.data.data);
            console.log("results 1: ", results);
            return response.data.data
        }).catch(function (error) {
            console.error(error);
        });
    };
    
    // const searchJobs = async () => { 
    //     const response = await searchJobByKeyword(search);
    //     console.log("final_response: ", response);
    //     setResults(response);
    //     console.log("results: ", results);
    //     // navigate(`/search/${search}`);
    // };
        


    return (
        <div className="row" id="wd-search-bar">
            <div className="input-group mb-3 ps-0">
                <input type="text" className="form-control" 
                    placeholder="Search for jobs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                <button className="btn btn-primary" type="button" id="search-button"
                    onClick={searchJobsByKeyword}>
                    Search
                </button>
                <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
        </div>
    );
};

export default SearchBar;