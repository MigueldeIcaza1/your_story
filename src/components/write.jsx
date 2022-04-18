import './write.css';
import React from 'react';

export class Write extends React.Component {
    render() {
        return (
            <div>
                <div id='header' className='contact-container p-4 pb-6'>
                    <div className='row'>

                        <div className='col-md-2'>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="home">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Write</li>
                                </ol>
                            </nav>
                        </div>

                        <div className='col-md-10 d-flex'>
                            <div className='col-md-5 leadspace leadspace-2 leadspace-padding'>
                                <div className='col-md-8'>
                                    <h1 class="leadSpace_header">Start writing, no matter what...
                                    {/* Your writing inspires */}
                                    </h1>
                                    <p>We can do no great things, only small things with great love.</p>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div role="presentation" className="col-md-7 float-end line_space Lines_container__36j4i">
                                    <svg className="Lines_image__2O61U Lines_imageTop__27foq" height="0" viewBox="0 0 100 100" width="0" xmlns="http://www.w3.org/2000/svg"><line class="Lines_line__2-BFp" x1="-25%" y1="50%" x2="125%" y2="50%" vector-effect="non-scaling-stroke"></line></svg>
                                    <svg className="Lines_image__2O61U Lines_imageBottom__12Ll5" height="0" viewBox="0 0 100 100" width="0" xmlns="http://www.w3.org/2000/svg"><line class="Lines_line__2-BFp" x1="-25%" y1="50%" x2="125%" y2="50%" vector-effect="non-scaling-stroke"></line></svg>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                <div id='form'>
                    <form className='row m-0 p-0'>
                        <div className='col-md-2'></div>
                        <div className='col-md-9 pb-5'>
                            {/* <div class="form_note float-start">All fields are required unless marked optional.</div> */}

                            <div className='pt-3'>
                                <div class="row row-cols-2">

                                    <div class="col-md-10 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label for="firstName" className="bx--label">Title</label>
                                            <div class="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="My funny story" class="bx--text-input bx--text__input" title="" name="firstName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label for="UserName" className="bx--label">User name</label>
                                            <div class="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="John" class="bx--text-input bx--text__input" title="" name="userName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-5 pb-4">
                                        <div className="bx--form-item bx--text-input-wrapper">
                                            <label for="tagName" className="bx--label">Tag name</label>
                                            <div class="bx--text-input__field-outer-wrapper">
                                                <div className="bx--text-input__field-wrapper">
                                                    <input type="text" placeholder="#fun #life" class="bx--text-input bx--text__input" title="" name="tagName" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-10 pb-4">
                                        <div className="bx--form-item">
                                            <label for="story" className="bx--label">Description</label>
                                            <div className="bx--text-area__wrapper">
                                                <textarea className="bx--text-area" cols="50" rows="15" name="story" placeholder="Type your description here…"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-5 pb-4">
                                        <div class="bx--form-item bx--form-item-checkbox bx--checkbox-wrapper">
                                            <input type="checkbox" class="bx--checkbox" name="acknowledgement" />
                                            <label for="anonymous" class="bx--checkbox-label text-start"><span class="bx--checkbox-label-text">Share as <i>anonymous</i>. </span></label>
                                        </div>
                                    </div>
                                    <div class="col-md-5 pb-4">
                                        <button type="submit" class="btn btn-primary share-btn col-md-6 float-right w-100 text-start">Share</button>
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

