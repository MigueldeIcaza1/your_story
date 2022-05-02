import './contact.css';
import React from 'react';
import { postContact } from '../services/ContactService';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from '../services/withRouter';


export class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '', lastName: '', emailAddress: '', confirmEmailAddress: '', phoneNo: '', jobRole: '', message: '',
            isFirstNameTouched: false, isLastNameTouched: false, isEmailAddressTouched: false, isConfirmEmailAddressTouched: false, isMessageTouched: false
        };

        this.submit = this.submit.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.setIsTouched = this.setIsTouched.bind(this);
    }

    inputChange(property, event) {
        this.setState({ [property]: event.target.value });
    }

    setIsTouched(property) {
        this.setState({ [property]: true });
    }

    isValid() {
        let isValid = true;
        if (!this.state.firstName) {
            isValid = false;
            this.setState({ isFirstNameTouched: true });
        }
        if (!this.state.lastName) {
            isValid = false;
            this.setState({ isLastNameTouched: true });
        }
        if (!this.state.emailAddress) {
            isValid = false;
            this.setState({ isEmailAddressTouched: true });
        }
        if (!this.state.confirmEmailAddress) {
            isValid = false;
            this.setState({ isConfirmEmailAddressTouched: true });
        }
        if (!this.state.message) {
            isValid = false;
            this.setState({ isMessageTouched: true });
        }
        if (!this.validateEmail(this.state.emailAddress)) {
            isValid = false;
            this.setState({ isEmailAddressTouched: true });
        }
        if (this.state.confirmEmailAddress && this.state.emailAddress &&
            this.state.emailAddress.trim() !== this.state.confirmEmailAddress.trim()) {
            isValid = false;
            this.setState({ isConfirmEmailAddressTouched: true });
        }
        return isValid;
    }

    validateEmail(email) {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    submit() {

        if (!this.isValid()) { return; }

        const request = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailAddress: this.state.emailAddress,
            message: this.state.message,
            phoneNo: this.state.phoneNo,
            jobRole: this.state.jobRole
        };

        postContact(request).then(response => {
            if (response === true) { 
                toast.success("Saved! Our team will contact you soon.");
                setTimeout(() => this.props.navigate('/home'), 2000);
            }
            // else { this.showErrorToast(); }
            
            // this.props.navigate('/home');
        }, () => { this.showErrorToast(); }
        ).catch((error) => {
            this.showErrorToast();
            this.props.navigate('/home');
        });
    }

    showErrorToast() {
        toast.error("Oops! Something went wrong");
    }

    render() {
        return (
            <div>
                <div id='header' className='contact-container p-4 pb-6'>
                    <div className='row'>

                        <div className='col-md-2'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="home">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>

                        <div className='col-md-10 d-flex'>
                            <div className='col-md-5 leadspace leadspace-padding'>
                                <div className='col-md-8'>
                                    <h1 className="leadSpace_header">Contact WSEG Research</h1>
                                    <p>Please fill out the form below so the appropriate representative from WESG Research can contact you.</p>
                                </div>
                            </div>

                            <div className="col-md-6 d-none d-sm-block">
                                <div role="presentation" className="col-md-7 float-end line_space Lines_container__36j4i">
                                    <svg className="Lines_image__2O61U Lines_imageTop__27foq" height="0" viewBox="0 0 100 100" width="0" xmlns="http://www.w3.org/2000/svg"><line className="Lines_line__2-BFp" x1="-25%" y1="50%" x2="125%" y2="50%" vectorEffect="non-scaling-stroke"></line></svg>
                                    <svg className="Lines_image__2O61U Lines_imageBottom__12Ll5" height="0" viewBox="0 0 100 100" width="0" xmlns="http://www.w3.org/2000/svg"><line className="Lines_line__2-BFp" x1="-25%" y1="50%" x2="125%" y2="50%" vectorEffect="non-scaling-stroke"></line></svg>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div id='form'>
                    <form className='row m-0 p-0'>
                        <div className='col-md-2'></div>
                        <div className='col-md-9 pb-5'>
                            <div className="form_note float-start">All fields are required unless marked optional.</div>
                            <br />

                            <div className='pt-3'>
                                <div className="row">

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="firstName" className="bx--label">First name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Ada" className="bx--text-input bx--text__input" title="" name="firstName"
                                                        onChange={(event) => this.inputChange('firstName', event)} onBlur={() => this.setIsTouched('isFirstNameTouched')} />
                                                </div>
                                            </div>
                                            {this.state.isFirstNameTouched && !this.state.firstName && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="lastName" className="bx--label">Last name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace" className="bx--text-input bx--text__input" title="" name="lastName"
                                                        onChange={(event) => this.inputChange('lastName', event)} onBlur={() => this.setIsTouched('isLastNameTouched')} />
                                                </div>
                                            </div>
                                            {this.state.isLastNameTouched && !this.state.lastName && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="emailAddress" className="bx--label">Email address</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace@example.com" className="bx--text-input bx--text__input" title="" name="emailAddress"
                                                        onChange={(event) => this.inputChange('emailAddress', event)} onBlur={() => this.setIsTouched('isEmailAddressTouched')} />
                                                </div>
                                            </div>
                                            {this.state.isEmailAddressTouched && !this.state.emailAddress && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                            {this.state.isEmailAddressTouched && this.state.emailAddress &&
                                                !this.validateEmail(this.state.emailAddress) && <span className='validation-label bx-form-requirement'>Enter valid Email Address</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="confirmEmailAddress" className="bx--label">Confirm email address</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace@example.com" className="bx--text-input bx--text__input" title="" name="confirmEmailAddress"
                                                        onChange={(event) => this.inputChange('confirmEmailAddress', event)} onBlur={() => this.setIsTouched('isconfirmEmailAddressTouched')} />
                                                </div>
                                            </div>
                                            {this.state.isConfirmEmailAddressTouched && !this.state.confirmEmailAddress && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                            {this.state.confirmEmailAddress && this.state.emailAddress &&
                                                this.state.emailAddress.trim() !== this.state.confirmEmailAddress.trim() && <span className='validation-label bx-form-requirement'>Confirm Email Address mismatch</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="phoneNo" className="bx--label">Phone number (optional)</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="tel" placeholder="000-123-4567" className="bx--text-input bx--text__input" title="" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                        onChange={(event) => this.inputChange('phoneNo', event)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="jobRole" className="bx--label">Job role (optional)</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Technology advisor" className="bx--text-input bx--text__input" title="" name="jobRole"
                                                        onChange={(event) => this.inputChange('jobRole', event)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item">
                                            <label htmlFor="message" className="bx--label">Message</label>
                                            <div className="bx--text-area__wrapper">
                                                <textarea cols="50" rows="4" name="message" placeholder="Type your message here…" className="bx--text-area"
                                                    onChange={(event) => this.inputChange('message', event)} onBlur={() => this.setIsTouched('isMessageTouched')} />
                                            </div>
                                            {this.state.isMessageTouched && !this.state.message && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4"></div>
                                    <div className="col-md-5 pb-4"><button type="button" className="btn btn-primary share-btn col-md-6 float-right w-100 text-start"
                                        onClick={() => this.submit()}>Submit</button></div>


                                </div>
                            </div>


                        </div>
                    </form>
                </div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                />

            </div>

        );
    }
}

export default withRouter(Contact);

