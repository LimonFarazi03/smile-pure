import React from "react";
import doctor from "../../images/doctors-picture/h1-doctor.png";
import "./Home.css";

const Home = () => {
  return (
    <div className=" container">
      <div className='row d-flex justify-content-around align-items-center'>
      <div className='col-6'>
        <img src={doctor} alt="" />
      </div>
      <div className='col-6 h1-clr d-inline-block'>
        <h1>Modern-day Caring Technologies for Your Dental Health</h1>
        SmilePure always places patients at the center of our attention, and concentrate on improving their experience with the aid of technologies.
        <ul>
          <li>We check for your current dental situation and decide treatment</li>
          <li>Our specialists will take care of your smile with dedication</li>
          <li>We run periodic check-ups to ensure your teeth are good</li>
          <li>Even on weekends & holidays, our staff still work at your services</li>
        </ul>
        <button className="btn btn-warning">Hellow</button>
      </div>
      </div>
    </div>
  );
};

export default Home;
