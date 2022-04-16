import './main-content.css';
import React from 'react';
import writeImage from './../img/lets-write.jpg';
import logo from './../logo.svg';

export class MainContent extends React.Component {
    render() {
        return (
            <div>

                <section role="article" about="/in-en/node/2598576" className="ibm-duo-leadspace ibm-duo-leadspace-large ibm-background-gray-10 ibm-duo-u--bg-lazy-load--processed">

               
                    <div className="ibm-grid-container ibm-duo-leadspace-large__container"  style={{ backgroundImage:`url(${writeImage})` }}>
                        <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-8 ibm-grid-col-lg-16-16 ibm-grid-col-seamless ibm-duo-leadspace-large__bg">

                            <div className="imgbox">
                                {/* <img src={writeImage} className="fade-in-image image-side center-fit" alt="let's write" /> */}
                            </div>
                            <div className="picturefill-background ibm-duo-leadspace-large__image ani-reveal ani-fadeIn back-image">
                                <span data-src="//1.cms.s81c.com/sites/default/files/2022-04-01/20220405-ibm-z-multiframe-annc-2304x983_2.jpg"></span>
                                <span data-src="//1.cms.s81c.com/sites/default/files/2022-04-01/20220405-ibm-z-multiframe-annc-mobile-720x360_2.jpg" data-media="(min-width: 320px)"></span>
                                <span data-src="//1.cms.s81c.com/sites/default/files/2022-04-01/20220405-ibm-z-multiframe-annc-2304x983_2.jpg" data-media="(min-width: 672px)"></span>
                            </div>

                        </div>

                        <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-4 ibm-grid-col-lg-16-7 ibm-duo-leadspace-large__content">
                            <div className="ibm-grid-col-sm-4-3 ibm-grid-col-lg-16-12 ibm-grid-col-xlg-16-16 ibm-grid-col-seamless ibm-mb-4 ibm-duo-leadspace-large__headline ani-reveal ani-fadeInUp" data-wow-delay=".2s">
                                <h1 className="bx--type-expressive-heading-05 bx--type-light ibm-textcolor-gray-90 ibm-pb-0 ibm-mb-0">
                                    <span>The new IBM z16 platform</span>

                                </h1>
                            </div>

                            <div className="ibm-duo-leadspace-large__subhead">
                                <div className="ibm-grid-col-sm-4-3 ibm-grid-col-lg-16-10 ibm-grid-col-xlg-16-12 ibm-grid-col-seamless ani-reveal ani-fadeInUp" data-wow-delay=".4s">
                                    <p className="bx--type-expressive-heading-03 ibm-textcolor-gray-70 ibm-mb-0">
                                        <span>Manage 25 billion secure transactions daily, across any hybrid cloud structure</span>

                                    </p>
                                </div>


                                <div className="ibm-btn-row ibm-button-link ibm-mt-4 ani-reveal ani-fadeInUp" data-wow-delay=".6s">











                                    <div className="ibm-duo-button-item">
                                        <a target="_self" href="/in-en/products/z16?lnk=hpv18l1" className="ibm-btn-pri ibm-duo-btn-cta ibm-duo-u--link-icon">
                                            Build your future with IBM z16




                                            <svg focusable="false" className="ibm-duo-u--link-icon--arrow-right" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>


                                        </a>
                                    </div>

                                </div>
                                <div className="ibm-grid-col-sm-4-4 ani-reveal ani-fadeInUp" data-wow-delay=".7s">
                                </div>


                            </div>
                        </div>

                        <div className="ibm-grid-col-sm-4-1 ibm-grid-col-md-8-0 ibm-grid-col-lg-16-1"></div>

                        <div className="ibm-grid-col-sm-4-4 ibm-grid-col-md-8-4 ibm-grid-col-lg-16-8 ibm-grid-col-xlg-16-8 ibm-grid-col-seamless ibm-duo-leadspace-large__media-full">
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default MainContent;


