import React from "react";
import "./Services.css";
import tImg1 from "../../images/small-picture/h1-icon-new-1.png";
import tImg2 from "../../images/small-picture/h1-icon-new-2.png";
import tImg3 from "../../images/small-picture/h1-icon-new-3.png";
import tImg4 from "../../images/small-picture/h1-icon-new-4.png";
import ServicePerson from "../ServicedPerson/ServicePerson";
// import tImg5 from "../../images/small-picture/h1-icon-new-5.png";
// import tImg5 from '../../images/small-picture/h1-icon-new-5.png';

const Services = () => {
  return (
    <div>
      <div className="container mx-auto">
      <div className="row ">
        <div className="col">
          <div className="p-3 border-0">
            <div className="row text-center mt-2">
            <h1 className="my-5">Service Specialty</h1>
              <div className="col-12 col-md-3">
                <img src={tImg1} alt="" />
                <h5 className='mt-4'>24/7 Express Services</h5>
              </div>
              <div className="col-12 col-md-3">
              <img src={tImg2} alt="" />
              <h5 className='mt-4'>15 Years of Experience</h5>
              </div>
              <div className="col-12 col-md-3">
              <img src={tImg3} alt="" />
              <h5 className='mt-4'>Modern Advanced Technologies</h5>
              </div>
              <div className="col-12 col-md-3">
              <img src={tImg4} alt="" />
              <h5 className='mt-4'>Promotional Yearly Membership</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <ServicePerson/>
    </div>
  );
};

export default Services;
