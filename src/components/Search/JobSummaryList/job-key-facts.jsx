function JobKeyFacts({job}) {
    console.log("job in JobKeyFacts: ", job)
    // const job = job.job
    return (
        <div>
            job key facts
            <div className="row"> 
            <b>Job Title: {job.job_title}</b> 
            </div>
            <div className="row"> 
                <b>Company: {job.employer_name}</b> 
            </div>
            <div className="row">
                <div className="col-12"> Job Location: {job.job_city},{job.job_state} </div>
            </div>
            <div className="row">
                <div className="col-12"> Posted Time: {job.job_posted_at_datetime_utc} </div>
            </div>
        </div>
    )
}
export default JobKeyFacts;