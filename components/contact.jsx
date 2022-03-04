import React from "react";

export default function AppContact({ contactInfo }) {
  return (
    <div className="row">
      <div className="col-sm-1"></div>
      <div
        className="col-sm-5 animate-box"
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "3em" }}
      >
        <h3>Contact Us</h3>
        <ul className="contact-info">
          <li>
            <i className="icon-location4"></i>{contactInfo?.address}
            Maharagama
          </li>
          <li>
            <i className="icon-phone3"></i>{contactInfo?.phoneNo}
          </li>
        </ul>
      </div>

      <div
        className="col-sm-5 animate-box"
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "2em" }}
      >
        <h3>Parish Office</h3>
        <ul className="contact-info">
          <li>
            <b>Parish Priest:</b> {contactInfo?.priestName}
          </li>
          <li>
            <b>Location: </b> {contactInfo?.location}
          </li>
          <li>
            <b>Office Day - {contactInfo?.officeDay}</b>
          </li>
        </ul>

        <ul>
          {contactInfo?.times.map((time, i) => (
            <li key={i}>{time}</li>
          ))}
        </ul>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
}
