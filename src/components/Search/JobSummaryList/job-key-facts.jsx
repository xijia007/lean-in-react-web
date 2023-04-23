import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import COMPANY_ID from 'constants/company';
import * as ROUTES from 'constants/routes';
import { convertISODate } from '../../../utils/timeUtil';

function JobKeyFacts(job) {
  const { title, company_name, post_time, add_city, add_state } = job;
  const location = `${add_city}, ${add_state}`;
  const time = post_time ? convertISODate(post_time) : null;

  const companyProfileLink = `${ROUTES.COMPANY_PROFILE}/${
    COMPANY_ID[company_name.toUpperCase()]
  }`;
  return (
    <div>
      <div className="row">
        <b>Job Title: {title}</b>
      </div>
      <div className="row">
        <b>
          <LinkContainer to={companyProfileLink}>
            <Nav.Link>Company: {company_name}</Nav.Link>
          </LinkContainer>
        </b>
      </div>
      <div className="row">
        <div className="col-12"> Job Location: {location} </div>
      </div>
      <div className="row">
        <div className="col-12"> Posted Time: {time} </div>
      </div>
    </div>
  );
}
export default JobKeyFacts;
