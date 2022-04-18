import './top-content.css';
import React from 'react';
// import writeImage from './../../img/lets-write.jpg';
import write12 from './../../img/write12.jpg';

export class TopContent extends React.Component {
    render() {
        return (
            <div className='top-content fade-in-image' style={{ backgroundImage: `url(${write12})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='row m-0'>
                    <div className='content col-md-4 left-content'>
                        <span className='content-title main-title ps-5'>
                        <h2>Share something to Inspire</h2>
                        {/* Someone */}
                        {/* <h2>Share your experience </h2> */}
                        </span>
                        <div className='bottom-left'>
                            <div className='content-title title-2'><h4>Everyone is a writer at least once in their life</h4></div>
                            <a href='write' className='btn btn-primary share-btn'>Share the lesson that you have learnt
                                <svg focusable="false" className="ms-2 ibm-duo-u--link-icon--arrow-right" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContent;

