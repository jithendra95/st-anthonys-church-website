import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import AppMass from "../components/masses";

export default class MassPage extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Masses | St Mary's Church Maharagama</title>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="All mass times for special masses and regular masses at St Mary's Church Maharagama and St Anthony's Church Boralesgamuwa"
          />
          <meta
            name="keywords"
            content="st mary, st mary's, st mary's maharagama, st athony's boralesgamuwa, st anthony, st athony's, maharagama, boralesgamuwa, catholic, catholic church, church, masses, mass times, mass time "
          />

          <meta property="og:title" content="Masses | St Mary's Church Maharagama" />
          <meta property="og:description" content="All mass times for special masses and regular masses at St Mary's Church Maharagama and St Anthony's Church Boralesgamuwa" />
          <meta property="og:image" content="/static/assets/template/images/Mary.png" />
          <meta property="og:url" content="https://www.stmarysmaharagama.org/masses" /> 
          <meta property="og:type" content="website" />

        </Head>
        <Layout>
          <div className="container-wrap">
            <aside id="fh5co-hero">
              <div className="flexslider">
                <ul className="slides">
                  <li
                    style={{
                      backgroundImage:
                        "url('static/assets/template/images/img_bg_3.jpg')",
                    }}
                  >
                    <div className="overlay"></div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center slider-text">
                          <div className="slider-text-inner">
                            <h1>Masses & Services</h1>
                            <h2>St Mary's Church Maharagama</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            <AppMass />
          </div>
        </Layout>
      </>
    );
  }
}
