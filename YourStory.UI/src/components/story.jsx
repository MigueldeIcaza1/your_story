import './story.css';
import React from 'react';
import { withRouter } from '../services/withRouter';
import { baseURL } from '../services/urls';
import { ToastContainer, toast } from 'react-toastify';

export class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = { story: null };
    this.showErrorToast = this.showErrorToast.bind(this);
  }

  isLoading = false;

  componentDidMount() {
    if (this.isLoading) return;

    this.isLoading = true;
    fetch(`${baseURL}/story/GetStory?id=${this.props.params.id}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({ story: result });
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

  render() {
    return (
      <div>{!this.state.story ? <div>Loading...</div> :

        <div className="p-5">
          <div className="row">

            <div className="col-md-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/home">Home</a></li>
                  <li className="breadcrumb-item"><a href="/explore">Explore</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Writing</li>
                </ol>
              </nav>
            </div>

            <div className="col-md-7">
              <div className='story-text story-font'>
                <h1 className='text-start ibm-type-f post-title pb-1'>{this.state.story.title}</h1>
                <p className="text-start ibm-type-a article-author pb-2">by {this.state.story.isAnonymous? 'Great Writer': this.state.story.userName} | {this.state.story.formatedCreatedOn}</p>
                <p className="text-start ibm-type-b article-tag pb-5">{this.state.story.tagName}</p>
                <div className=''><pre style={{ fontFamily: 'IBM Plex Serif' }}>{this.state.story.description}</pre></div>
              </div>
            </div>

            <ToastContainer
              position="top-right"
              autoClose={2000}
            />

          </div>

        </div>
      }
      </div>

    );
  }
}

export default withRouter(Story);

