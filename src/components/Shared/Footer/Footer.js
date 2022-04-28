import React from "react";
import "./Footer.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div id="animation">
      Copyright © {currentYear}. All rights reserved by SmilePure
    </div>
  );
};

export default Footer;
