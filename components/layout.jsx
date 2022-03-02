import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default class AppLayout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>St Mary's Church Maharagama</title>
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
