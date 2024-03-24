import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./About.css"; // Your custom CSS
import placeholderImage from "../assets/img/LogoNew.png"; // Replace with your image path

const About = () => {
  return (
    <div className="about-page vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div>
              <h1 className="mb-3">The GreenThreads Story</h1>
              <p className="lead">GreenThreads is a forward-thinking initiative transforming the fashion landscape by championing sustainability. Our mission is to curtail the effects of fast fashion by connecting eco-conscious consumers with small, local businesses and individual sellers who offer a treasure trove of second-hand clothing. We're not a retailer; we're a gateway to a world of environmentally friendly fashion choices, where every purchase supports the longevity of apparel and nurtures community-based commerce. Embrace style with substance and join GreenThreads in weaving a future where fashion is kind to our planet.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={placeholderImage} alt="About" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
