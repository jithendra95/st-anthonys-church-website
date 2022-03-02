import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import AppMass from "../components/masses";

export default class MassPage extends React.Component {
  render() {
    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Free HTML5 Website Template by freehtml5.co"
          />
          <meta
            name="keywords"
            content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive"
          />
          <meta name="author" content="freehtml5.co" />

          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:card" content="" />
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
