import './story.css';
import React from 'react';
import { withRouter } from '../services/withRouter';

export class Story extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

  render() {
    return (
        <div>
            <div className=''>
               story {this.props.params.id}
               <h1>ablc</h1>
               <p>author</p>
               <p>descripton</p>
            </div>
        </div>
      
    );
  }
}

export default withRouter(Story);

