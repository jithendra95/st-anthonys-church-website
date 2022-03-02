import React from "react";

export default class AppMass extends React.Component {
  render() {
    return (
      <div id="fh5co-events">
        <div className="events-entry">
          <div class="row animate-box">
            <div class="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
              <h2>Lenten Masses</h2>
            </div>
          </div>

          <h3>
            <a href="#special" id="special">
              Ash Wednesday
            </a>
          </h3>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>06:30 AM - billigual</li>
                  <li>06:30 PM - Sinhala</li>
                </ul>
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Anthony's Church Boralesgamuwa</h4>
                <ul>
                  <li>06:30 PM - billigual</li>
                </ul>
              </div>
              <div />
            </div>
          </div>
        </div>

        <div className="events-entry">
          <div class="row animate-box">
            <div class="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
              <h2>Regular Masses</h2>
            </div>
          </div>

          <h3>
            <a href="#daily" id="daily">
              Sunday
            </a>
          </h3>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>09:30 AM - billigual</li>
                </ul>
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Anthony's Church Boralesgamuwa</h4>
                <ul>
                  <li>09:30 AM - billigual</li>
                </ul>
              </div>
              <div />
            </div>
          </div>

          <hr />

          <h3>
            <a href="#daily" id="daily">
              Tuesday
            </a>
          </h3>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>09:30 AM - billigual</li>
                </ul>
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Anthony's Church Boralesgamuwa</h4>
                <ul>
                  <li>09:30 AM - billigual</li>
                </ul>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
