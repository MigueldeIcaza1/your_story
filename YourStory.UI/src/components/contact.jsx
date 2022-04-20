import './contact.css';
import React from 'react';

export class Contact extends React.Component {
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
                            <br/>

                            <div className='pt-3'>
                                <div className="row">

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="firstName" className="bx--label">First name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Ada" className="bx--text-input bx--text__input" title="" name="firstName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="lastName" className="bx--label">Last name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace" className="bx--text-input bx--text__input" title="" name="lastName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="emailAddress" className="bx--label">Email address</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace@example.com" className="bx--text-input bx--text__input" title="" name="emailAddress" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="confirmEmailAddress" className="bx--label">Confirm email address</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Lovelace@example.com" className="bx--text-input bx--text__input" title="" name="confirmEmailAddress" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="phone" className="bx--label">Phone number (optional)</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="tel" placeholder="000-123-4567" className="bx--text-input bx--text__input" title="" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="phone" className="bx--label">Job role (optional)</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Technology advisor" className="bx--text-input bx--text__input" title="" name="phone"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item">
                                            <label htmlFor="message" className="bx--label">Message</label>
                                            <div className="bx--text-area__wrapper">
                                                <textarea cols="50" rows="4" name="message" id="message" placeholder="Type your message here…" className="bx--text-area"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4"></div>
                                    <div className="col-md-5 pb-4"><button type="submit" className="btn btn-primary share-btn col-md-6 float-right w-100 text-start">Submit</button></div>


                                </div>
                            </div>                  
                            
                            
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default Contact;

