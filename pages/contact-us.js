import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import {
  INQUIRY_SUBJECTS,
  CONTACT_ITEMS,
  FIRM_NAME,
} from '../services/constants';
import Head from 'next/head';

const ContactUs = (props) => {
  const title = `Contact ${FIRM_NAME}`;
  const description = `Get in touch with ${FIRM_NAME} for your demat and IEPF related queries.`;
  const [isFormDisabled, setFormDisabled] = React.useState(false);
  const [showFormMessage, setShowFormMessage] = React.useState(null);
  const FORM = 'inquiryForm';
  const validateAndSubmit = async (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    const form = document.getElementById(FORM);
    if (form.checkValidity()) {
      form.classList.add('was-validated');
      const formElems = ['name', 'email', 'phoneNo', 'inquirySubject', 'query'];
      setFormDisabled(true);
      const formValues = {};
      formElems.map((id) => {
        const val = document.getElementById(id)?.value;
        formValues[id] = val;
      });
      fetch('/api/post-inquiry', {
        method: 'POST',
        body: JSON.stringify(formValues),
      })
        .then(async (rawResp) => {
          const successMessage = {
            isSuccess: true,
            header: 'YaY! Your query is raised! :)',
            message:
              'Hurray!! Your query has been raised with concerned team. Our executive will get back to you soon.',
            textClass: 'success',
          };
          const failureMessage = {
            isSuccess: false,
            header: "OOPS! Fail to raise your query! :'(",
            message:
              'Due to some technical issues, we cannot raise your query with our team. Please try again later or reach out to our team on mentioned email or phone. ',
            textClass: 'danger',
          };
          const resp = await rawResp.json();
          if (rawResp.ok) {
            console.log('Form Post Success: ');
            setShowFormMessage(successMessage);
          } else {
            console.log('Internal error: ', resp);
            setShowFormMessage(failureMessage);
          }
          setFormDisabled(false);
        })
        .catch((e) => {
          console.log('Failed to send email: ', e);
          setShowFormMessage(failureMessage);
        });
    }
  };

  return (
    <div className="main-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/assets/images/iepf.jpeg" />
      </Head>
      <NavBar activeLink="contactUs" />
      <h1 className="page-head">Contact Us</h1>
      <div className="row">
        <div className="col-sm-8">
          {!showFormMessage && (
            <div className="card">
              <div className="card-header">Send us your queries!</div>
              <div className="card-body">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={validateAndSubmit}
                  name={FORM}
                  id={FORM}
                >
                  <div className="col-sm-12">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      disabled={isFormDisabled}
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      disabled={isFormDisabled}
                    />
                    {/* <div className="valid-feedback">Looks good!</div> */}
                    <div className="invalid-feedback">
                      Please enter valid email.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="phoneNo" className="form-label">
                      Phone No:
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text" id="phoneNoPrepend">
                        +91
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNo"
                        aria-describedby="inputGroupPrepend"
                        required
                        maxLength={10}
                        minLength={10}
                        pattern="[9876]{1}[0-9]{9}"
                        disabled={isFormDisabled}
                      />
                      {/* <div className="valid-feedback">Looks good!</div> */}
                      <div className="invalid-feedback">
                        Please enter valid phone no.
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="inquirySubject" className="form-label">
                      Inquiry Subject:
                    </label>
                    <select
                      className="form-select"
                      id="inquirySubject"
                      required
                      disabled={isFormDisabled}
                    >
                      {INQUIRY_SUBJECTS.map(({ key, title }) => (
                        <option key={key} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Please choose inquiry subject.
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="query" className="form-label">
                      Query:
                    </label>
                    <textarea
                      className="form-control"
                      id="query"
                      required
                      disabled={isFormDisabled}
                    />
                    <div className="invalid-feedback">
                      Please write your query.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                        disabled={isFormDisabled}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="invalidCheck"
                      >
                        Agree to terms and conditions. We do not spam you or
                        share your details with external agencies.
                      </label>
                      <div className="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {!isFormDisabled && (
                      <button className="btn btn-primary" type="submit">
                        Submit Query
                      </button>
                    )}
                    {isFormDisabled && (
                      <button
                        className="btn btn-primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        &nbsp;Please wait while we submit your query...
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}
          {showFormMessage && (
            <div className={`card border-${showFormMessage.textClass}`}>
              <div className={`card-header text-${showFormMessage.textClass}`}>
                {showFormMessage.header}
              </div>
              <div className="card-body">{showFormMessage.message}</div>
            </div>
          )}
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header">Contact Details!</div>
            <div className="card-body">
              <ul className="list-group list-group-flush contact-items">
                {CONTACT_ITEMS.map((i) => (
                  <li className="list-group-item" key={i.key}>
                    <div className="row">
                      <div className="col-sm-1">
                        <i
                          className={i.iconClass}
                          style={{ color: i.iconColor }}
                        />
                      </div>
                      <div className="col-sm-10">
                        <span dangerouslySetInnerHTML={{ __html: i.html }} />
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li className="list-group-item">
                                <i className="bi-alarm"></i> Alarm
                            </li>
                            <li className="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                <label class="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
                            </li>
                            <li className="list-group-item">A third item</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
