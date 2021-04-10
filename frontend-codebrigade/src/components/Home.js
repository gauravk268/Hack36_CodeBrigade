import React from "react";

function Home(props) {
  return (
    <div>
      <div id="search">
        <button type="button" className="close">×</button>
        <form id="contact" action="#" method="get">
          <fieldset>
            <input type="search" name="q" placeholder="SEARCH KEYWORD(s)" aria-label="Search through site content" />
          </fieldset>
          <fieldset>
            <button type="submit" className="main-button">Search</button>
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
                <a href="##" className="main-stroked-button">SCAN THE CODE</a>
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
                <p><a rel="nofollow noopener" href="https://templatemo.com/tm-543-breezed" target="_parent">Breezed HTML Template</a> is provided by TemplateMo for absolutely free of charge. You can download, edit and use this for your non-commercial and commercial websites.
                        <br /><br />Redistributing this template as a downloadable ZIP file on any template collection website is strictly prohibited. You will need to talk to us if you want to redistribute this template. Thank you.
                      <br /><br />This is a Bootstrap v4.3.1 CSS layout. Do you like it? You can feel free to <a rel="nofollow noopener" href="https://templatemo.com/contact" target="_parent">talk to us</a> if you have anything.</p>
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
                            <li><img src="assets/images/contact-info-01.png" alt="" />+91-8423487977</li>
                            <li><img src="assets/images/contact-info-02.png" alt="" />amitsingh12559@gmail.com</li>
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
