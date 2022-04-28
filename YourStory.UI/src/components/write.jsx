import './write.css';
import React from 'react';
import { postStory } from './../services/StoryService';
import { withRouter } from '../services/withRouter';
import { ToastContainer, toast } from 'react-toastify';

export class Write extends React.Component {

    constructor(props) {
        super(props);

        this.state = { title: '', userName: '', tagName: '', description: '', isAnonymous: false,
        isTitleTouched: false, isUserNameTouched: false, isTagNameTouched: false, isDescriptionTouched: false };

        this.share = this.share.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
        this.setIsTouched = this.setIsTouched.bind(this);
        this.showErrorToast = this.showErrorToast.bind(this);
    }

    inputChange(property, event) {
        this.setState({ [property]: event.target.value });
    }

    checkBoxChange(property, event) {
        this.setState({ [property]: event.target.checked });
    }

    setIsTouched(property) {
        this.setState({ [property]: true });
    }

    isValid() {
        let isValid = true;
        if (!this.state.title) {
            isValid = false;
            this.setState({ isTitleTouched: true });
        }
        if (!this.state.userName) {
            isValid = false;
            this.setState({ isUserNameTouched: true });
        }
        if (!this.state.tagName) {
            isValid = false;
            this.setState({ isTagNameTouched: true });
        }
        if (!this.state.description) {
            isValid = false;
            this.setState({ isDescriptionTouched: true });
        }
        if (this.state.title && this.state.title.length > 500) {
            isValid = false;
            this.setState({ isTitleTouched: true });
        }
        if (this.state.userName && this.state.title.length > 50) {
            isValid = false;
            this.setState({ isUserNameTouched: true });
        }
        if (this.state.tagName && this.state.tagName.length > 500) {
            isValid = false;
            this.setState({ isTagNameTouched: true });
        }
        return isValid;
    }

    share() {

        if (!this.isValid()) { return; }

        const request = {
            title: this.state.title,
            userName: this.state.userName,
            tagName: this.state.tagName,
            description: this.state.description,
            isAnonymous: this.state.isAnonymous,
        };

        postStory(request).then(response => {
            if (response === true) { }
            // else { this.showErrorToast(); }
            this.props.navigate('/home');
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
                                    <li className="breadcrumb-item active" aria-current="page">Write</li>
                                </ol>
                            </nav>
                        </div>

                        <div className='col-md-10 d-flex'>
                            <div className='col-md-5 leadspace leadspace-2 leadspace-padding'>
                                <div className='col-md-8'>
                                    <h1 className="leadSpace_header">Start writing, no matter what...
                                        {/* Your writing inspires */}
                                    </h1>
                                    <p>We can do no great things, only small things with great love.</p>
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
                            {/* <div className="form_note float-start">All fields are required unless marked optional.</div> */}

                            <div className='pt-3'>
                                <div className="row">

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="title" className="bx--label">Title</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="My funny story" className="bx--text-input bx--text__input" title="" name="title" 
                                                        onChange={(event) => this.inputChange('title', event)} onBlur={() => this.setIsTouched('isTitleTouched')}/>
                                                   
                                                </div>
                                            </div>
                                            {this.state.isTitleTouched && !this.state.title && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                            {this.state.title && this.state.title.length > 500 && <span className='validation-label bx-form-requirement'>Should not be more than 500 characters</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="UserName" className="bx--label">User name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="Jessie" className="bx--text-input bx--text__input" title="" name="userName" 
                                                    onChange={(event) => this.inputChange('userName', event)} onBlur={() => this.setIsTouched('isUserNameTouched')}/>
                                                </div>
                                            </div>
                                            {this.state.isUserNameTouched && !this.state.userName && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                            {this.state.userName && this.state.userName.length > 50 && <span className='validation-label bx-form-requirement'>Should not be more than 50 characters</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="tagName" className="bx--label">Tag name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="#fun #life" className="bx--text-input bx--text__input" title="" name="tagName" 
                                                    onChange={(event) => this.inputChange('tagName', event)} onBlur={() => this.setIsTouched('isTagNameTouched')}/>
                                                </div>
                                            </div>
                                            {this.state.isTagNameTouched && !this.state.tagName && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                            {this.state.tagName && this.state.tagName.length > 500 && <span className='validation-label bx-form-requirement'>Should not be more than 500 characters</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item">
                                            <label htmlFor="story" className="bx--label">Description</label>
                                            <div className="bx--text-area__wrapper">
                                                <textarea className="bx--text-area" cols="50" rows="15" name="story" placeholder="Type your description here…"
                                                    onChange={(event) => this.inputChange('description', event)} onBlur={() => this.setIsTouched('isDescriptionTouched')}/>
                                            </div>
                                            {this.state.isDescriptionTouched && !this.state.description && <span className='validation-label bx-form-requirement'>This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--form-item-checkbox bx--checkbox-wrapper">
                                            <input type="checkbox" className="bx--checkbox" name="acknowledgement" 
                                                onChange={(event) => this.checkBoxChange('isAnonymous', event)}/>
                                            <label htmlFor="anonymous" className="bx--checkbox-label text-start"><span className="bx--checkbox-label-text">Share as <i>anonymous</i>. </span></label>
                                        </div>
                                    </div>
                                    <div className="col-md-5 pb-4">
                                        <button type="button" className="btn btn-primary share-btn col-md-6 float-right w-100 text-start"
                                            onClick={this.share}>Share</button>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </form>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                />
            </div>

        );
    }
}

export default withRouter(Write);


