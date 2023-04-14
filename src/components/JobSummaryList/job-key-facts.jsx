function JobKeyFacts(job) {
    return (
        <div>
            <div className="row"> 
            <b>Job Title: {job.title}</b> 
            </div>
            <div className="row"> 
                <b>Company: {job.company}</b> 
            </div>
            <div className="row">
                <div className="col-12"> Job Location: {job.location} </div>
            </div>
            <div className="row">
                <div className="col-12"> Posted Time: {job.postedTime} </div>
            </div>
        </div>
    )
}
export default JobKeyFacts;