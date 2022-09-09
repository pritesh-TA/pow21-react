import React from "react";
import "./header.css";
import canedalogo from "../../assets/images/canada.png";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <>
        <div id="top-bar" className="transparent-topbar">
          <div className="container clearfix">
            <div className="col_half nobottommargin clearfix all-cities-wraps">
              {/* Top Links
      ============================================= */}
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="#">
                      Canada &nbsp;&nbsp;
                      <img width="20px" src={canedalogo} />
                      <i className="icon-angle-down" />
                    </a>
                  </li>
                  {/* <ul className="dropdown-content">
                    <li>
                      <a href="#">United States</a>
                    </li>
                    <li>
                      <a href="#">Canada</a>
                    </li>
                  </ul> */}
                </ul>
              </div>
            </div>
            <div className="col_half fright col_last clearfix nobottommargin top-links-wraps">
              {/* Top Links
      ============================================= */}
              <div className="top-links">
                <ul>
                  {/* Before Member Login */}
                  {/* <li>
                    <a>
                      <i className="fa-solid fa-user"></i>
                      <span className="user-name">user-name </span>
                    </a>
                  </li> */}
                  <li>
                    <a>
                      <i className="fa-solid fa-lock"></i> <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa-solid fa-user"></i>{" "}
                      <span>Join Today</span>
                    </a>
                  </li>
                  {/* Member Login End */}
                  <li>
                    <a>
                      <i
                        className="fa-solid fa-heart"
                        style={{ color: "red" }}
                      />
                      <span>Fav Strains</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa-solid fa-bell"></i>
                      <span> Price Alerts</span>
                    </a>
                  </li>
                  {/* <li>
                    <a>
                     <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      <span>Logout</span>
                    </a>
                  </li> */}
                </ul>
              </div>
              {/* .top-links end */}
            </div>
          </div>
        </div>
        {/* #top-bar end */}
        <header id="header" className="not-dark">
          <div id="header-wrap" style={{ backgroundColor: "#fff" }}>
            <div className="container clearfix">
              <div id="primary-menu-trigger">
                <i className="icon-reorder" />
              </div>
              {/* Logo
      ============================================= */}
              <div id="logo">
                <a className="standard-logo">
                  <img src={logo} alt="Canvas Logo" />
                </a>
                <a className="retina-logo">
                  <img src="assets/images/logo@2x.png" alt="Canvas Logo" />
                </a>
              </div>
              {/* #logo end */}
              <nav id="primary-menu" className="sub-title">
                <ul>
                  <li>
                    <a>
                      <div>Cannabis Converter</div>
                      <span>Calculate the price of weed</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Price Alert</div>
                      <span>Get notified if price changes</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>I Feel Like</div>
                      <span>Personalize your experience</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Compare</div>
                      <span>Find the best deal</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Free Widget + API</div>
                      <span>Canabis widget + developers</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
