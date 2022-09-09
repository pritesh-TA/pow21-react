import React from "react";

import "./dark.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="dark">
        <div className="container">
          {/* ====================== Footer Widgets ====================== */}
          <div className="footer-widgets-wrap clearfix">
            <div className="col_three_fifth">
              <div className="col_half">
                <div className="widget clearfix">
                  <h4 style={{ marginBottom: 10 }}>About Us</h4>
                  <p style={{ marginBottom: 10 }}>
                    Compare thousands of cannabis strain prices and brands in
                    one place. The easiest way to find your favourite marijuana,
                    compare prices and get the best local deal.
                  </p>
                  <p style={{ marginBottom: 10 }}>
                    We also believe every experience matters. So together, we
                    help recreational and medical cannabis consumers with smart
                    and easy ways to create their desired experience from
                    thousands of marijuana strains, dispensaries, and retailers
                    in one place.
                  </p>
                  <p style={{ marginBottom: 10 }}>
                    That’s Pu-pow!
                    <a href="https://www.pow21.com/blog/about-pow/">
                      Learn more about POW
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col_half col_last">
                <div className="widget clearfix">
                  <h4>Recent Posts</h4>
                  <div id="post-list-footer">
                    <div className="spost clearfix">
                      <div className="entry-c">
                        <div className="entry-title">
                          <h4>
                            <a href="#">
                              What is CBD? How does it affect you?{" "}
                            </a>
                          </h4>
                        </div>
                        <ul className="entry-meta"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_two_fifth col_last">
              <div
                className="widget clearfix"
                style={{ marginBottom: "-20px" }}
              >
                <div className="row">
                  <div className="col-lg-6 bottommargin-sm">
                    <div className="counter counter-small">12432</div>
                    <h5 className="nobottommargin">Strains and counting</h5>
                    <h4 style={{ marginBottom: 10, marginTop: 50 }}>
                      Business &amp; Advertising
                    </h4>
                    <span>
                      <a href="https://www.pow21.com/blog/business/">
                        Business solutions
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href="https://www.pow21.com/blog/business/form-add-a-business-listing/">
                        Add a free business listing
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href="https://www.pow21.com/blog/business/dispensary-solutions/">
                        Dispensary &amp; retailer solutions
                      </a>
                    </span>
                    <br />
                    <span>
                      <a href="https://www.pow21.com/blog/business/brand-solutions/">
                        Brand solutions
                      </a>
                    </span>
                    <br />
                    <br />
                    <abbr title="Email Address">
                      <strong>Email:</strong>
                    </abbr>
                    pupow@pow21.com
                  </div>
                  <div className="col-lg-6 bottommargin-sm">
                    <div className="counter counter-small">12</div>
                    <h5 className="nobottommargin">
                      Dispensaries and retailers
                    </h5>
                    <h4 style={{ marginBottom: 10, marginTop: 50 }}>
                      Media &amp; Press
                    </h4>
                    <abbr title="Email Address">
                      <strong>Email:</strong>
                    </abbr>
                    press@pow21.com
                  </div>
                </div>
              </div>
              <div>
                <br />
                <br />
              </div>
              <div
                className="widget clearfix"
                style={{ marginBottom: 0, marginTop: 20 }}
              >
                <div className="row">
                  <div className="social-icon-wrap col-lg-6 clearfix bottommargin-sm">
                    <a
                      href="#"
                      className="social-icon si-dark si-colored si-facebook nobottommargin"
                      style={{ marginRight: 10 }}
                    >
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </a>
                    <a href="#">
                      <small style={{ display: "block", marginTop: 3 }}>
                        <strong>Friend us</strong>
                        <br />
                        on Facebook
                      </small>
                    </a>
                  </div>
                  <div className="social-icon-wrap col-lg-6 clearfix">
                    <a
                      href="https://twitter.com/pupow21"
                      className="social-icon si-dark si-colored si-twitter nobottommargin"
                      style={{ marginRight: 10 }}
                    >
                      <i className="icon-twitter" />
                      <i className="icon-twitter" />
                    </a>
                    <a href="https://twitter.com/pupow21">
                      <small style={{ display: "block", marginTop: 3 }}>
                        <strong>Follow us</strong>
                        <br />
                        on Twitter
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* .footer-widgets-wrap end */}
        </div>
        {/* Copyrights
============================================= */}
        <div id="copyrights">
          <div className="container clearfix">
            <p style={{ color: "#ccc", fontSize: 12 }}>
              Important Notice: Content on this website is intended strictly for
              informational and educational purposes only. Marijuana is illegal
              in some Jurisdictions and is your responsibility to check your
              local regulations to comply by the law. POW purpose, content and
              context are intended for both industry reporting, and opinion
              expression. POW does not promote or endorse any product or
              represent that the products mentioned on POW’s website are a
              treatment for any kind of medical condition or symptom. POW cannot
              guarantee that the information provided is error-free or complete
              and is not responsible for the quality of the information provided
              by users and sources. POW does not endorse any user-reported
              information, any particular strain, product, producer,
              organization, treatment or medical or non-medical therapy. POW
              does not make representations regarding the use of cannabis and
              does not provide any of its own views on the use of cannabis, its
              benefits, or promotes its use.
            </p>
            <div className="col_half nomargin">
              Copyrights © 2019 All Rights Reserved by POW Inc.
            </div>
            <div
              className="copyright-links col_half nomargin"
              style={{ textAlign: "right", float: "right" }}
            >
              <a href="https://www.pow21.com/blog/termsofuse/">Terms of Use</a>/
              <a href="https://www.pow21.com/blog/privacy/">Privacy Policy</a>/{" "}
              <a routerlink="/">Logout</a>
            </div>
          </div>
        </div>
        {/* #copyrights end */}
      </footer>
    </div>
  );
};

export default Footer;
