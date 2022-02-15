import React from "react";

export default class AppHeader extends React.Component {
  render() {
    return (
      <nav className="fh5co-nav" role="navigation">
        <div className="container-wrap">
          <div className="top-menu">
            <div className="row">
              <div className="col-md-12 col-offset-0 text-center">
                <div id="fh5co-logo">
                  <a href="">St Anthony's Church Boralesgamuwa</a>
                </div>
              </div>
              <div className="col-md-12 col-md-offset-0 text-center menu-1">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/masses">Masses & Services</a>
                  </li>
                  <li>
                    <a href="/association">Associations</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
