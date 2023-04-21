import axios from 'axios'

const searchJobsByKeyword = async (searchTerm) => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {query: searchTerm, page: '1', num_pages: '1'},
        headers: {
          'X-RapidAPI-Key': 'f2a0361d41msh2ff7d2d6a6963bdp16613ajsn2eeffd075db5',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
    axios.request(options).then(function (response) {
        console.log("response.data.data in job-service: ",response.data.data);
        // console.log("response: ",response);
        // setResults(response.data.data);
        // console.log("results 1: ", results);
        return response.data.data
    }).catch(function (error) {
        console.error(error);
    });
}

export default searchJobsByKeyword;