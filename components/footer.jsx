import React from "react";

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className="container-wrap">
        <footer id="fh5co-footer" role="contentinfo">
          <div className="col-md-4 text-center">
            <h3>Cemetery Road, Boralesgamuwa 29000</h3>
          </div>
          <div className="col-md-4 text-center">
            <h3>
              <a href="/">St Anthony's Church Boralesgamuwa</a>
            </h3>
          </div>
          <div className="col-md-4 text-center">
              <ul className="fh5co-social-icons">
                <li>
                  <a href="#">
                    <i className="icon-twitter2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-dribbble2"></i>
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
