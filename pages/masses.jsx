import React from "react";
import Layout from "../components/layout";

export default class MassPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container-wrap">
          <aside id="fh5co-hero">
            <div className="flexslider">
              <ul className="slides">
                <li
                  style={{
                    backgroundImage:
                      "url('static/assets/template/images/img_bg_2.jpg')",
                  }}
                >
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 text-center slider-text">
                        <div className="slider-text-inner">
                          <h1>Masses & Services</h1>
                          <h2>St Anthony's Church Boralesgamuwa</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <div id="fh5co-events">
            <div className="events-entry">
              <h3>
                <a href="#special" id='special'>Special Masses</a>
              </h3>
              <div className="sub-items">
                <div className="row">
                  <div className="col-md-4" style={{marginBottom: '50px'}}>
                    <h4>Christmas Masses</h4>
                    <ul>
                      <li>24th December 2021 - 11:30 PM</li>
                      <li>25th December 2021 - 07:30 AM</li>
                    </ul>
                  </div>
                  <div className="col-md-4" style={{marginBottom: '50px'}}>
                    <h4>New Years Masses</h4>
                    <ul>
                      <li>01st January 2022 - 07:30 AM</li>
                      <li>01st January 2022 - 11:30 AM</li>
                    </ul>
                  </div>
                  <div />
                </div>
              </div>
            </div>
            <div className="events-entry">
              <h3>
                <a href="#daily" id='daily'>Regular Masses</a>
              </h3>
              <div className="sub-items">
                <div className="row">
                  <div className="col-md-4" style={{marginBottom: '50px'}}>
                    <h4>Sunday Masses</h4>
                    <ul>
                      <li>09:30 AM - Bi-Lingual</li>
                    </ul>
                  </div>
                  <div className="col-md-4" style={{marginBottom: '50px'}}>
                    <h4>Tuesday Mass & Novena</h4>
                    <ul>
                      <li>06:30 PM - Novena</li>
                      <li>07:00 PM - Mass</li>
                    </ul>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
