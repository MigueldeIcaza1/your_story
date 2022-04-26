// import writeImage from './../../img/lets-write.jpg';
import writeImage1 from './../../img/write2.jpg';
import writeImage2 from './../../img/write3.jpg';
import writeImage3 from './../../img/write8.jpg';
// import writeImage4 from './../../img/my_story.jpg';
// import writeImage5 from './../../img/once-upon-a-time.jpg';
import './middle-content.css';
import React from 'react';

export class MiddleContent extends React.Component {
    render() {
        return (
            <div className='main-contianer mb-5'>

                <div className="container py-5">
                    <div className="row contianer-row">

                        <div className="col-sm">
                            <h2 className='text-black side-title'>Explore stories, experiences and lessons</h2>
                            <a href="/explore" className="btn-link btn-text float-start">Read all
                                <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                            </a>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <img className="card-img-top" src={writeImage1} alt="Write" />
                                <div className="card-body">
                                    <h5 className="card-title text-black">Card title</h5>
                                    <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/writings/1" className="btn-link btn-text float-start">Read it now
                                        <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <img className="card-img-top" src={writeImage2} alt="Write" />
                                <div className="card-body">
                                    <h5 className="card-title text-black">Card title</h5>
                                    <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/writings/1" className="btn-link float-start">Read it now
                                        <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card">
                                <img className="card-img-top" src={writeImage3} alt="Write" />
                                <div className="card-body">
                                    <h5 className="card-title text-black">Card title</h5>
                                    <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/writings/1" className="btn-link float-start">Read it now
                                        <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default MiddleContent;

