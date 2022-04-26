import './header.css';
import React from 'react';

export class Header extends React.Component {
  render() {
    return (
        <div>
            <div className='header'>
                <a className='title' href='/home'><label className='title-label'>WSEG</label></a>
                
                <a className='item' href='/write'><label className='label'>Write</label></a>
                <a className='item' href='/share'><label className='label'>Share</label></a>
                <a className='item' href='/explore'><label className='label'>Explore</label></a>
                <a className='item' href='/grasp'><label className='label'>Grasp</label></a>
            </div>
        </div>
      
    );
  }
}

export default Header;

