import React from "react";

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className="container-wrap">
        <footer id="fh5co-footer" role="contentinfo">
          <div className="col-md-4 text-center">
            <div>
              <span className="footer-menu">
                <a href="/">Home</a>
              </span>{" "}
              |{" "}
              <span className="footer-menu">
                <a href="/masses">Masses & Service</a>
              </span>{" "}
              | <span className="footer-menu"><a href='/contact'>Contact</a></span>
            </div>
            {/* <h3>Church Garden's, Mahamegawatte, <br/>Maharagama 10280, Sri Lanka</h3> */}
          </div>
          <div className="col-md-4 text-center">
            <h3>
              <a href="/">St Mary's Church Maharagama</a>
            </h3>
          </div>
          <div className="col-md-4 text-center">
            <ul className="fh5co-social-icons">
              <li>
                <a href="https://www.facebook.com/St-Marys-Church-Maharagama-1391610607802822/">
                  <i className="icon-facebook2"></i>
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">
                  &copy; 2022. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
