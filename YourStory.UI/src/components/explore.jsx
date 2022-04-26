import './explore.css';
import React from 'react';

import { baseURL } from '../services/urls';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from '../services/withRouter';
import writeImage1 from './../img/write2.jpg';
// import writeImage2 from './../img/write3.jpg';
// import writeImage3 from './../img/write8.jpg';
// import writeImage4 from './../img/my_story.jpg';
// import writeImage5 from './../img/once-upon-a-time.jpg';

export class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = { stories: null };
        this.showErrorToast = this.showErrorToast.bind(this);
    }

    componentDidMount() {
        const pageNo = 1, pageSize = 5;

        fetch(`${baseURL}/story/GetStories?pageNo=${pageNo}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({ stories: result });
            },
                (error) => {
                    // this.setState({  isLoaded: true, error });
                    this.showErrorToast();
                    this.props.navigate('/home');
                }
            );
    }


    showErrorToast() {
        toast.error("Oops! Something went wrong");
    }

    render() {
        // if (!this.state.stories) return (<div></div>)
        return (

            <div>{!this.state.stories? <div>Loading...</div>: 
            <div>

                <div className="container explore-container text-start py-5">
                    <div className="row">
                        <div className="col-md-1 col-sm-0"></div>

                        <div className="col-md-8 col-sm-0">

                            {this.state.stories.length > 0 && this.state.stories.map(item => (
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <div className="card text-white bg-dark mb-3">
                                            <img className="card-img-top" src={writeImage1} alt="Write" />
                                        </div>

                                    </div>
                                    <div className='col-md-7 post-container'>
                                        <a href='writings/1' className='story-text story-font'> {item.title}
                                            <p className='ibm-type-f ibm-type-serif post-title ibm-pb-1'>How IBMer Nishtha is Bringing AI Fairness to Bollywood</p>
                                            <p className='ibm-type-b ibm-type-serif ibm-textcolor-gray-60 post-body'>The women of IBM are doing some amazing things to change the world, so let’s celebrate them! We caught up with Nishtha...</p>
                                            <p className="ibm-type-a ibm-type-serif ibm-textcolor-gray-60 article-author">by IBM Careers Blog | March 16, 2020</p>
                                        </a>
                                    </div>
                                </div>
                            ))}



                        </div>

                        <div className="col-md-3 col-sm-0"></div>
                    </div>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                />

            </div>
            }</div>

        );
    }
}

export default withRouter(Explore);

