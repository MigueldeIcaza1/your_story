import './footer.css';
import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer-content py-3'>
                <hr className='mt-0 mx-5'/>
                <div className='px-5 text-start'>
                    <a href='contact' className='px-1 footer-item'>Contact</a>
                </div>
            </div>

        );
    }
}

export default Footer;

