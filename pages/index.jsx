import Head from "next/head";
import React from "react";
import AppContact from "../components/contact";
import Layout from "../components/layout";
import AppMass from "../components/masses";

export default class IndexPage extends React.Component {
  render() {
    return (
		<>
        <Head>
          <title>St Mary's Church Maharagama</title>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Home Page for St Mary's Church Maharagama"
          />
          <meta
            name="keywords"
            content="st mary, st mary's, st mary's maharagama, st athony's boralesgamuwa, st anthony, st athony's, maharagama, boralesgamuwa, catholic, catholic church, church, masses, mass times, mass time, office hours, parish priest "
          />

          <meta property="og:title" content="Contact | St Mary's Church Maharagama" />
          <meta property="og:description" content="Home Page for St Mary's Church Maharagama" />
          <meta property="og:image" content="/static/assets/template/images/Mary.png" />
          <meta property="og:url" content="https://www.stmarysmaharagama.org" /> 
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
                      <div className="col-md-6 col-md-offset-3 text-center">
                        <div className="slider-text">
                          <div className="slider-text-inner">
                            <h1 style={{ fontSize: "22px" }}>
                              “Come, follow me,” Jesus said, “and I will send
                              you out to fish for people.” At once they left
                              their nets and followed him.
                            </h1>
                            <h2
                              style={{
                                textAlign: "right",
                                marginBottom: "5em",
                              }}
                            >
                              Matthew 4:19-20
                            </h2>
                            <p>
                              {" "}
                              <a
                                className="btn btn-primary btn-learn"
                                href="/masses"
                              >
                                All Mass Times{" "}
                                <i className="icon-arrow-right3"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <AppMass />

          <hr />

          <AppContact />

          <hr />
        </div>
      </Layout>

	  </>
    );
  }
}
