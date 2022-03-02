import React from "react";

export default class AppContact extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-1"></div>
        <div
          className="col-sm-5 animate-box"
          style={{ marginTop: "20px", marginLeft: "10px", marginBottom: '3em' }}
        >
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="icon-location4"></i>Church Garden's, Mahamegawatte.,
              Maharagama
            </li>
            <li>
              <i className="icon-phone3"></i>+94 0112 843 561
            </li>
          </ul>
        </div>

        <div
          className="col-sm-5 animate-box"
          style={{ marginTop: "20px", marginLeft: "10px", marginBottom: '2em' }}
        >
          <h3>Parish Office</h3>
          <ul className="contact-info">
            <li>
              <b>Parish Priest:</b> Rev. Fr. Edmund Thilakaratne
            </li>
            <li>
              <b>Location: </b> St Mary's Church Maharagama
            </li>
            <li>
              <b>Office Day - Wednesday</b>
            </li>
          </ul>

            <ul>
              <li> 8:30 AM - 12:30 PM (Wednesday)</li>
              <li> 4:00 PM - 7:00 PM (Wednesday)</li>
            </ul>
        </div>
        <div className="col-sm-1"></div>
      </div>
    );
  }
}
