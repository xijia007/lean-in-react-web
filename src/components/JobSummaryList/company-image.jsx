function CompanyImage(job) {
  return (
    <img src={`https://logo.clearbit.com/${job.company}.com`}
        onError={(e) => { e.target.src = '/images/default_logo.jpg'; }}// set default image path
        alt="Company Logo" className="img-fluid"/>
    // might still need to address 400 error in console: failed to load resource: the server responded with a status of 400 ()
  );
}
export default CompanyImage;