import React from 'react';

const Footer = () => {
    return (
        <div id="footer" className="text-center bg-danger ">
            <br />
            <p className="text-light fs-5 mt-3">Band-Maker &copy;Shahar Netaneli {new Date().getFullYear()}</p>
            <br />
        </div>
    );
}

export default Footer;