import './write.css';
import React from 'react';
import { postStory } from './../services/StoryService';

export class Write extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: '', userName: '', tagName: '', description: '', isAnonymous: false };

        this.share = this.share.bind(this);
    }

    share() {
        const request = { title: 'test', userName: 'user1', tagName: '#abc', description: 'alkf', isAnonymous: false };

        postStory(request).then(response => {
            console.log(response);
        });
            
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
                                            <label htmlFor="firstName" className="bx--label">Title</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="My funny story" className="bx--text-input bx--text__input" title="" name="firstName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="UserName" className="bx--label">User name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="John" className="bx--text-input bx--text__input" title="" name="userName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label htmlFor="tagName" className="bx--label">Tag name</label>
                                            <div className="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="#fun #life" className="bx--text-input bx--text__input" title="" name="tagName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item">
                                            <label htmlFor="story" className="bx--label">Description</label>
                                            <div className="bx--text-area__wrapper">
                                                <textarea className="bx--text-area" cols="50" rows="15" name="story" placeholder="Type your description here…"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5 pb-4">
                                        <div className="bx--form-item bx--form-item-checkbox bx--checkbox-wrapper">
                                            <input type="checkbox" className="bx--checkbox" name="acknowledgement" />
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

            </div>

        );
    }
}

export default Write;

