import Document, { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../components/favicon";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };

    return props;
  }

  render() {
    return (
      <Html>
        <Head>

          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="static/assets/template/css/animate.css"
          />
          <link
            rel="stylesheet"
            href="static/assets/template/css/icomoon.css"
          />

          <link
            rel="stylesheet"
            href="static/assets/template/css/bootstrap.css"
          />

          <link
            rel="stylesheet"
            href="static/assets/template/css/magnific-popup.css"
          />

          <link
            rel="stylesheet"
            href="static/assets/template/css/flexslider.css"
          />

          <link
            rel="stylesheet"
            href="static/assets/template/css/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="static/assets/template/css/owl.theme.default.min.css"
          />

          <link rel="stylesheet" href="static/assets/template/css/style.css" />

          <script src="static/assets/template/js/modernizr-2.6.2.min.js"></script>

          <script src="static/assets/template/js/respond.min.js"></script>

          <Favicon/>
        </Head>
        <body>
          <div className="fh5co-loader"></div>

          <div id="page">
            <Main />
            <NextScript />
            <style
              dangerouslySetInnerHTML={{
                __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }`,
              }}
            ></style>
          </div>

          <div className="gototop js-top">
            <a href="#" className="js-gotop">
              <i className="icon-arrow-up2"></i>
            </a>
          </div>

          <script src="static/assets/template/js/jquery.min.js"></script>

          <script src="static/assets/template/js/jquery.easing.1.3.js"></script>

          <script src="static/assets/template/js/bootstrap.min.js"></script>

          <script src="static/assets/template/js/jquery.waypoints.min.js"></script>

          <script src="static/assets/template/js/jquery.flexslider-min.js"></script>

          <script src="static/assets/template/js/owl.carousel.min.js"></script>

          <script src="static/assets/template/js/jquery.magnific-popup.min.js"></script>
          <script src="static/assets/template/js/magnific-popup-options.js"></script>

          <script src="static/assets/template/js/jquery.countTo.js"></script>

          <script src="static/assets/template/js/main.js"></script>
        </body>
      </Html>
    );
  }
}
