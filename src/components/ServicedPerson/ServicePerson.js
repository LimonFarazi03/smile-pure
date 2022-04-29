import React from "react";
import "./ServicePerson.css";
import image1 from "../../images/small-picture/image1.jpg";
import image2 from "../../images/small-picture/image2.jpg";
import image3 from "../../images/small-picture/image3.jpg";
import MasterCart from "../MasterCart/MasterCart";

const ServicePerson = () => {
  return (
    <div>
      <div className="back-clr">
        <div className="text-center container mt-5">
          <div className="mx-auto sixe">
            <h1 className="mt-5 mb-3">Cosmic Dental</h1>
            <p className="mb-5">
              Our clinic offers all kinds of services and constantly study new
              technology to add new custom services to the list
            </p>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-sm-4 mb-5">
                <div className="card">
                  <img
                    width={"100%"}
                    src={image1}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      Cosmetic dentistry mainly concerns improving the
                      appearance of your teeth, including whitening & …
                    </p>
                    <div className="btn-more mx-auto">Checkout</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <img
                    width={"100%"}
                    src={image2}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Dental Implant</h5>
                    <p className="card-text">
                      Cosmetic dentistry mainly concerns improving the
                      appearance of your teeth, including whitening & …
                    </p>
                    <div className="btn-more mx-auto">Checkout</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 cursor-pointer">
                <div className="card">
                  <img
                    width={"100%"}
                    src={image3}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">Pediatric Dentist</h5>
                    <p className="card-text">
                      Cosmetic dentistry mainly concerns improving the
                      appearance of your teeth, including whitening & …
                    </p>
                    <div className="btn-more mx-auto">Checkout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MasterCart />
    </div>
  );
};

export default ServicePerson;
