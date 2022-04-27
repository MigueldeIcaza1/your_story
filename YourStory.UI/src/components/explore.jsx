import './explore.css';
import React from 'react';

import { baseURL } from '../services/urls';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from '../services/withRouter';
// import writeImage1 from './../img/write2.jpg';
// import writeImage2 from './../img/write3.jpg';
// import writeImage3 from './../img/write4.jpg';
// import writeImage4 from './../img/my_story.jpg';
// import writeImage5 from './../img/once-upon-a-time.jpg';
import ReactPaginate from "react-paginate";

export class Explore extends React.Component {
    pageSize = 5;
    isLoading = false;

    constructor(props) {
        super(props);

        this.state = { stories: null, pageCount: 0 };
        this.showErrorToast = this.showErrorToast.bind(this);
        this.navigateToStory = this.navigateToStory.bind(this);
        this.pageChange = this.pageChange.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }


    componentDidMount() {
        if (this.isLoading) return;

        this.isLoading = true;
        this.fetchTotalRecordsCount();
        this.fetchData(1);
    }

    fetchData(pageNo) {
        fetch(`${baseURL}/story/GetStories?pageNo=${pageNo}&pageSize=${this.pageSize}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({ stories: result });
                this.isLoading = false;
                // scroll to the top
                window.scrollTo(0, 0);
            },
                (error) => {
                    // this.setState({  isLoaded: true, error });
                    this.showErrorToast();
                    this.props.navigate('/home');
                    this.isLoading = false;
                }
            );
    }

    fetchTotalRecordsCount() {
        fetch(`${baseURL}/story/GetStoriesCount`)
            .then(res => res.json())
            .then((result) => {
                this.setState({ pageCount: result });
            },
                (error) => {
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

    pageChange(data) {
        console.log(data.selected);

        let currentPage = data.selected + 1;
        this.fetchData(currentPage);
    }

    render() {
        // if (!this.state.stories) return (<div></div>)
        return (

            <div>{!this.state.stories ? <div>Loading...</div> :
                <div>

                    <div className="explore-container text-start pb-5 pt-5">
                        <div className="row m-0">
                            <div className="col-md-1 col-sm-0"></div>

                            <div className="col-md-8 col-sm-0">

                                {this.state.stories.length > 0 && <div className='story-text ibm-type-f    post-title ibm-pb-1'><b>The Latest</b></div>}

                                {this.state.stories.length > 0 && this.state.stories.map((item, index) => (
                                    <div className='row pb-5' key={index}>
                                        <div className='col-md-5'>
                                            <div className="card text-white bg-dark mb-3">
                                                <img onClick={() => this.navigateToStory(item.id)} className="card-img-top" src={require(`./../img/write${index % 5 + 1}.jpg`)} alt="Write" />
                                            </div>

                                        </div>
                                        <div className='col-md-7 post-container'>

                                            <a href={'/writing/' + item.id} className='story-text story-font'>
                                                <p className='ibm-type-f post-title ibm-pb-1 text-truncate'>{item.title}</p>
                                                <p className='ibm-type-b post-body three-line'>{item.description}</p>
                                                <p className="ibm-type-a article-author pt-3">by {item.isAnonymous ? 'Great Writer' : item.userName} | {item.formatedCreatedOn}</p>
                                            </a>
                                        </div>
                                    </div>
                                ))}

                                {this.state.stories.length > 0 &&
                                    <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        // breakLabel={"..."}
                                        pageCount={this.state.pageCount/this.pageSize}
                                        // marginPagesDisplayed={2}
                                        pageRangeDisplayed={2}
                                        onPageChange={(data) => this.pageChange(data)}
                                        containerClassName={"pagination justify-content-end"}
                                        pageClassName={"page-item"}
                                        pageLinkClassName={"page-link"}
                                        previousClassName={"page-item"}
                                        previousLinkClassName={"page-link"}
                                        nextClassName={"page-item"}
                                        nextLinkClassName={"page-link"}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active"}
                                    />}

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

