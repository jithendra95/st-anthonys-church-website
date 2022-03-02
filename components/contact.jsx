import React from "react";

export default class AppContact extends React.Component {
  render() {
    return (
        <div class="row">
        <div class="col-sm-1"></div>
          <div class="col-sm-5 animate-box" style={{marginTop: '20px' , marginLeft: '10px'}}>
            <h3>Contact Us</h3>
            <ul class="contact-info">
              <li>
                <i class="icon-location4"></i>Church Garden's, Mahamegawatte., Maharagama
              </li>
              <li>
                <i class="icon-phone3"></i>+94 0112 843 561
              </li>
              <li>
                <i class="icon-globe2"></i>
                <a href="/">www.stmarysmaharagama.org</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-5 animate-box" style={{marginTop: '20px', marginLeft: '10px'}}>
            <h3>Parish Office</h3>
            <ul class="contact-info">
               <li>
               <b>Parish Priest</b>: Rev. Fr. Edmund Thilakaratne
              </li>
              <li>
                <b>Open Wednesday 9:00 AM - 11:00 AM</b>
              </li>
            </ul>
          </div>
          <div class="col-sm-1"></div>
        </div>
    );
  }
}
