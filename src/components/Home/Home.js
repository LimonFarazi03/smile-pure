import React from "react";
import doctor from "../../images/doctors-picture/h1-doctor.png";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className='back-clr'>
      <div className="container position-relative">
      <div className='row d-flex justify-content-around align-items-center'>
      <div className='col-12 col-md-6'>
        <img width={'100%'} src={doctor} alt="" />
      </div>
      <div className='h1-clr col-12 col-md-6 h1-clr d-inline-block'>
        <h1 className='text-uppercase'>Modern-day Caring Technologies for Your Dental Health</h1>
        <p className='my-4'>SmilePure always places patients at the center of our attention, and concentrate on improving their experience with the aid of technologies.</p>
        <ul className='checklist my-2'>
          <li>We check for your current dental situation and decide treatment</li>
          <li>Our specialists will take care of your smile with dedication</li>
          <li>We run periodic check-ups to ensure your teeth are good</li>
          <li>Even on weekends & holidays, our staff still work at your services</li>
        </ul>
        <div className="mt-4 d-flex">
        <div className="btn-more">More About Us</div>
        <div className="ms-4 btn-more-sec">View Our Services</div>
        </div>
      </div>
      </div>
    </div>
    </div>
    <Services/>
    </div>
  );
};

export default Home;
