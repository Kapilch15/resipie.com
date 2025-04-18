import React from "react";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <section className="mt-4">
        <div className="row my-5 align-items-center justify-content-center">
          <div className="col-md-6 col-sm-6 col-12 ">
            <h2 className="fs-1 fw-bolder">
              Enjoy Your Delicous{" "}
              <span className="text-danger">Healthy Food</span>
            </h2>
            <p className="mt-5 fs-2">
              We are Maker of Different Varities of Food
            </p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <img className="hero-img" src="/Images/Coffee.avif" alt="" />
          </div>
        </div>
        <div className="row gap-4 mb-5">
          <div className="col-md-3 text-center bg-danger rounded-3 px-3 py-5">
            <h3>Why Choose Us ?</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia velit dignissimos unde asperiores optio neque odit? Ex itaque neque cum totam quidem quas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus architecto 
            <button className="btn bg-dark text-white rounded-3 p-2 mt-3">Learn more</button>
            </div>
          <div className="col-md-4 bg-info-subtle rounded-3 px-3 py-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia velit dignissimos unde asperiores optio neque odit? Ex itaque neque cum totam quidem quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum quaerat
            <span className="icon icons">
              <BsFillHandIndexThumbFill />
            </span>
            </div>
          <div className="col-md-4 bg-info rounded-3 px-3 py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia velit dignissimos unde asperiores optio neque odit? Ex itaque neque cum totam quidem quas.
          Mollitia velit dignissimos unde asperiores optio neque odit? Ex itaque neque Mollitia velit dignissimos unde asperiores optio neque odit? Ex itaque neque cum
          <span className="icon icons">
            <MdWorkspacePremium/>
          </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
