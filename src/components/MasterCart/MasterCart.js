import React from "react";
import masterCart from '../../images/small-picture/atm-cart.png';
import './MasterCart.css';

const MasterCart = () => {
  return (
    <div className="my-5">
      <div className="">
        <div className="container position-relative">
          <div className="row d-flex justify-content-around align-items-center">
            <div className="col-12 col-md-6 ">
              <img width={"100%"} src={masterCart} alt="master cart" />
            </div>
            <div className="h1-clr col-12 col-md-6 h1-clr d-inline-block">
              <h1>
              Purchase Our Membership to Save More
              </h1>
              <p className="my-4">
              SmilePure Clinic provides wide-ranging dental services for all age groups from children to the elderly. We are happy that we can be available to help.
              </p>
              <div className="mt-4">
                <div className="btn-more-join">Join Us Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCart;
