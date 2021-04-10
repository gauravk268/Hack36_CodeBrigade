import React, { useState } from "react";
import OurTeam from "./OurTeam";
import team from "../data/team";

function Home(props) {
  const ourTeam = useState(team)[0];

  return (
    <div>
      <div id="search">
        <button type="button" className="close">
          ×
        </button>
        <form id="contact" action="#" method="get">
          <fieldset>
            <input
              type="search"
              name="q"
              placeholder="SEARCH KEYWORD(s)"
              aria-label="Search through site content"
            />
          </fieldset>
          <fieldset>
            <button type="submit" className="main-button">
              Search
            </button>
          </fieldset>
        </form>
      </div>

      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          <div className="item">
            <div className="img-fill">
              <img src="assets/images/slide-01.jpg" alt="" />
              <div className="text-content">
                <h3>Welcome To CBS website</h3>
                <h3>U are # Restaurant</h3>
                <a href="/scanqr" className="main-stroked-button">
                  SCAN THE CODE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About the App</h6>
                  <h2>EAT SAFE!</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/service-item-01.png" alt="" />
                      <h4>Convienent</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/service-item-01.png" alt="" />
                      <h4>Fast</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/contact-info-03.png" alt="" />
                      <h4>Secure</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-item">
                      <img src="assets/images/contact-info-03.png" alt="" />
                      <h4>Contactless Service</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-text-content">
                <p>
                  CONTACTLESS IS THE NEW COMFORT: HOW TOUCHLESS TECHNOLOGY KEEPS
                  RESTAURANT BRANDS CONNECTED TO CUSTOMERS. SO THE PROBLEM IS
                  THAT WE HAVE TO PROVIDE CONTACTLESS SERVICE SO THAT THE SAFETY
                  OF THE CUSTOMERS AS WELL AS STAFF IS ENSURED.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container p-0 m-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Meet the Team</h2>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <div className="container">
                <div className="row m-0 container justify-content-center">
                  {ourTeam.map((teamMember) => (
                    <OurTeam teamMember={teamMember} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>Feel free to keep in touch with us!</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <img src="assets/images/contact-info-01.png" alt="" />
                    +91-8423487977
                  </li>
                  <li>
                    <img src="assets/images/contact-info-02.png" alt="" />
                    amitsingh12559@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
