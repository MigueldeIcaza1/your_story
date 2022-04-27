// import writeImage from './../../img/lets-write.jpg';
// import writeImage1 from './../../img/write2.jpg';
// import writeImage2 from './../../img/write3.jpg';
// import writeImage3 from './../../img/write4.jpg';
// import writeImage4 from './../../img/my_story.jpg';
// import writeImage5 from './../../img/once-upon-a-time.jpg';
import './middle-content.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { baseURL } from '../../services/urls';
import { withRouter } from '../../services/withRouter';

export class MiddleContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { stories: null };
        this.showErrorToast = this.showErrorToast.bind(this);
        this.navigateToStory = this.navigateToStory.bind(this);
    }

    isLoading = false;

    componentDidMount() {
        const pageNo = 1, pageSize = 3;

        if (this.isLoading) return;

        this.isLoading = true;
        fetch(`${baseURL}/story/GetStories?pageNo=${pageNo}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({ stories: result });
                this.isLoading = false;
            },
                (error) => {
                    // this.setState({  isLoaded: true, error });
                    this.showErrorToast();
                    this.props.navigate('/home');
                    this.isLoading = false;
                }
            );
    }


    showErrorToast() {
        toast.error("Oops! Something went wrong");
    }

    navigateToStory(id) {
        this.props.navigate('/writing/' + id);
    }

    render() {
        return (
            <div>{!this.state.stories || this.state.stories.length === 0 ? <div></div> :
                <div className='main-contianer mb-5'>

                    <div className="container py-5">
                        <div className="row contianer-row">

                            <div className="col-md-3">
                                <h2 className='text-black side-title'>Explore stories, experiences and lessons</h2>
                                <a href="/explore" className="btn-link btn-text float-start">Read all
                                    <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                </a>
                            </div>

                            {this.state.stories.map((item, index) => (
                                <div className="col-md-3" key={index}>
                                    <div className="card h-100" onClick={() => this.navigateToStory(item.id)}>
                                        <img className="card-img-top" src={require(`./../../img/write${index + 1}.jpg`)} alt="Write" />
                                        <div className="card-body">
                                            <h5 className="card-title text-black text-truncate">{item.title}</h5>
                                            <p className="card-text text-black three-line">{item.description}</p>
                                            <a href={'/writing/' + item.id} className="btn-link btn-text float-start">Read it now
                                                <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="col-sm">
                                <div className="card">
                                    <img className="card-img-top" src={writeImage2} alt="Write" />
                                    <div className="card-body">
                                        <h5 className="card-title text-black">Card title</h5>
                                        <p className="card-text text-black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href={'/writing/' + '1'} className="btn-link float-start">Read it now
                                            <svg focusable="false" className="ms-2" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" aria-label="View this link" width="20" height="20" viewBox="0 0 20 20" slot="icon"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                          */}

                        </div>
                    </div>

                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                    />
                </div>
            }
            </div>
        );
    }
}

export default withRouter(MiddleContent);

