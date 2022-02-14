import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default class AppLayout extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>St Anthony's Church Boralesgamuwa</title>
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
