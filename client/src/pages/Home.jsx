import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/core/HeroSection";

function Home() {
  return (
    <>
      <section>
        <div className="row my-5">
          <div className="col-md-6">
            <h1 className="main-heading">Resipie Restaurant</h1>
            <p className="mt-4 fw-normal">
              There are many variations of passages of Loremalteration in some
              form, by injected humour, or randomised
            </p>
            <li className="d-flex gap-5 mt-5">
            <Link type="button" to={"/menu"} className="btn bg-info px-3 py-3 fw-bolder text-light">Get Order</Link>
            <Link type="button" to={"/menu"} className="btn bg-danger px-3 py-3 fw-bolder text-light">Get Menu</Link>
            </li>
          </div>
          <img className="col-md-6 mt-md-0 mt-5" src="/Images/Beans.avif" alt="coffe beans"/>
          <div>
        </div>
    </div>
      <h1 className="display-4">Welcome to Resipie Restaurant</h1>
      <p className="lead">Experience the best dining in Delhi NCR with a blend of traditional and modern flavors.</p>
      <HeroSection/>
      </section>
    </>
  );
}

export default Home;
