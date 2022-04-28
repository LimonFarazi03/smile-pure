import React from "react";
import "./Footer.css";

const Footer = () => {
  let currentYear= new Date().getFullYear(); 
  return (
    <div className='back-color mt-5'>
      <div className="mb-0">
        <p className="text-center text-white p-5">
          Copyright © {currentYear}. All rights reserved by PureSmile
        </p>
      </div>
    </div>
  );
};

export default Footer;
