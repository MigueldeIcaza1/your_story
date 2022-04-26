import './bottom-content.css';
import React from 'react';

export class BottomContent extends React.Component {
    render() {
        return (
            <div className='main-container'>

                <div className="container py-5">
                    <div className="row contianer-row">

                        <div className="col-sm">
                            <h2 className='text-black side-title'>Don't know what to write</h2>
                            <a href="/" disabled className="btn-link btn-text float-start disabled disabled-link" onClick={ (event) => event.preventDefault() }>Here are few suggestions
                                <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                            </a>
                        </div>

                        <div className="col-sm">
                            <div className="card bg-white bullets-card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-black pb-2">Topics include</h5>
                                    <ul className="card-text text-black">
                                        <li className='bullet'>Your experience</li>
                                        <li className='bullet'>Your parent's experience</li>
                                        <li className='bullet'>Your friend's experience</li>
                                        <li className='bullet'>The lesson that you learnt</li>
                                        <li className='bullet'>A lesson from other's life</li>
                                        <li className='bullet'>Lessons learned from Pandemic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card bg-white bullets-card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-black">Topics include</h5>
                                    <ul className="card-text text-black">
                                        <li className='bullet'>A story/message that changed your life</li>
                                        <li className='bullet'>A story that inspired you</li>
                                        <li className='bullet'>A motivation to achieve your goal</li>
                                        <li className='bullet'>A story that you liked most</li>
                                        <li className='bullet'>How Pandemic changed my life</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card bg-white bullets-card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-black">Topics include</h5>
                                    <ul className="card-text text-black">
                                        <li className='bullet'>A message to society</li>
                                        <li className='bullet'>An idea to change the world</li>
                                        <li className='bullet'>A lesson from pandemic</li>
                                        <li className='bullet'>Your best trip experience</li>
                                        <li className='bullet'>A funny story</li>
                                        <li className='bullet'>A hobby that you started in this Pandemic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default BottomContent;

