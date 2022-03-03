import React from "react";

export default class AppMass extends React.Component {
  render() {
    return (
      <div id="fh5co-events">

        

        <div className="events-entry">
          <div className="row animate-box">
            <div className="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
              <h2>Regular Masses</h2>
              <p>Updated 03<sup>rd</sup> March 2022</p>
            </div>
          </div>

          <h3>
            <a href="#daily" id="daily">
              Sunday Eucharist
            </a>
          </h3>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>6:00 PM - Saturday (English)</li>
                  <li>7:30 AM - Sunday (Sinhala)</li>
                  <li>5:00 PM - Sunday (English)</li>
                </ul>
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Anthony's Church Boralesgamuwa</h4>
                <ul>
                  <li>09:30 AM - Sunday (Billigual)</li>
                </ul>
              </div>
              <div />
            </div>
          </div>

          <hr />

          <h3>
            <a href="#daily" id="daily">
              Weekday
            </a>
          </h3>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>5:00 PM - Wednesday - Perpetual help - Novena & Mass (Sinhala/English alternative)</li>  
                </ul>
              </div>
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Anthony's Church Boralesgamuwa</h4>
                <ul>
                  <li>06:00 PM - Tuesday - Mass & Novena (English)</li>
                </ul>
              </div>
              <div />
            </div>
          </div>
        </div>

        <div className="events-entry">
          <div className="row animate-box">
            <div className="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
              <h2>Season of Lent</h2>
            </div>
          </div>

          <div className="sub-items">
            <div className="row">
              <div className="col-sm-6" style={{ marginBottom: "50px" }}>
                <h4>St Mary's Church Maharagama</h4>
                <ul>
                  <li>5:00 PM - Friday - Mass, Gospel reflection & Benediction (Sinhala)</li>
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
