import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { INQUIRY_SUBJECTS } from "../services/constants";


const ContactUs = props => {
    const [isFormDisabled, setFormDisabled] = React.useState(false);
    const [showForm, setShowForm] = React.useState(true);
    const FORM = 'inquiryForm';
    const validateAndSubmit = ev => {
        ev.preventDefault();
        ev.stopPropagation();
        const form = document.getElementById(FORM);
        if (form.checkValidity()) {
            form.classList.add('was-validated');
            const formElems = ['name', 'email', 'phoneNo', 'inquirySubject', 'query'];
            setFormDisabled(true);
            const formValues = {};
            debugger
            formElems.map(id => {
                const val = document.getElementById(id)?.value;
                formValues[id] = val;
            });
            setTimeout(() => setFormDisabled(false), 5000); 
        }
    }

    return <div className="main-container">
        <NavBar activeLink="contactUs" />
        <h1 className="page-head">Contact Us</h1>
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-header">
                        Send us your queries!
                    </div>
                    <div className="card-body">
                        <form className="row g-3 needs-validation" novalidate onSubmit={validateAndSubmit} name={FORM} id={FORM}>
                            <div className="col-sm-12">
                                <label for="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" required disabled={isFormDisabled}/>
                                {/* <div className="valid-feedback">Looks good!</div> */}
                                <div className="invalid-feedback">Please enter your name.</div>
                            </div>
                            <div className="col-md-12">
                                <label for="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" required disabled={isFormDisabled}/>
                                {/* <div className="valid-feedback">Looks good!</div> */}
                                <div className="invalid-feedback">Please enter valid email.</div>
                            </div>
                            <div className="col-md-12">
                                <label for="phoneNo" className="form-label">Phone No:</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="phoneNoPrepend">+91</span>
                                    <input type="tel" className="form-control" id="phoneNo" aria-describedby="inputGroupPrepend" required maxLength={10} minLength={10} pattern="[9876]{1}[0-9]{9}" disabled={isFormDisabled}/>
                                    {/* <div className="valid-feedback">Looks good!</div> */}
                                    <div className="invalid-feedback">Please enter valid phone no.</div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <label for="inquirySubject" className="form-label">Inquiry Subject:</label>
                                <select className="form-select" id="inquirySubject" required disabled={isFormDisabled}>
                                   {INQUIRY_SUBJECTS.map(({key, title}) => <option key={key} value={title}>{title}</option>)}
                                </select>
                                <div className="invalid-feedback">Please choose inquiry subject.</div>
                            </div>
                            <div className="col-sm-12">
                                <label for="query" className="form-label">Query:</label>
                                <textarea className="form-control" id="query" required disabled={isFormDisabled}/>
                                <div className="invalid-feedback">Please write your query.</div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required disabled={isFormDisabled}/>
                                <label className="form-check-label" for="invalidCheck">
                                    Agree to terms and conditions. We do not spam you or share your details with external agencies. 
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {!isFormDisabled && <button className="btn btn-primary" type="submit">Submit Query</button>}
                                {isFormDisabled && <button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    &nbsp;Please wait while we submit your query...
                                </button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactUs;