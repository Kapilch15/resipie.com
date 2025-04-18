import {MenuTabs} from "../components/core/MenuTabs";
function Services() {
    return (
      <> 
        <h1 className="hero-heading text-center">Our Services</h1>
        <div className="d-flex bg-danger justify-content-center">---</div>
        <div>
        <ul>
          <li>Dine-In Experience</li>
          <li>Online Table Reservation</li>
          <li>Private Event Hosting</li>
          <li>Takeaway & Home Delivery</li>
        </ul>
        <div className="">
          <h2 className="fs-2 text-center text-uppercase">Our Menu</h2>
          <p className="text-center fw-bolder">Check Our <span className="text-danger">Delicious Yummy</span>{" "}Menu</p>
        <MenuTabs/>
        </div>
        </div>
      </>
    );
  }
  
  export default Services;
 