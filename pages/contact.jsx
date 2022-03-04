import Head from "next/head";
import React from "react";
import AppContact from "../components/contact";
import Layout from "../components/layout";

export default function ContactPage({conactInfo}) {
  return (
    <>
      <Head>
        <title>Contact | St Mary's Church Maharagama</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Contact Information for St Mary's Church Maharagama"
        />
        <meta
          name="keywords"
          content="st mary, st mary's, st mary's maharagama, st athony's boralesgamuwa, st anthony, st athony's, maharagama, boralesgamuwa, catholic, catholic church, church, masses, mass times, mass time, office hours, parish priest "
        />

        <meta
          property="og:title"
          content="Contact | St Mary's Church Maharagama"
        />
        <meta
          property="og:description"
          content="Contact Information for St Mary's Church Maharagama"
        />
        <meta
          property="og:image"
          content="/static/assets/template/images/Mary.png"
        />
        <meta
          property="og:url"
          content="https://www.stmarysmaharagama.org/contact"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <div className="container-wrap">
          <AppContact contactInfo={conactInfo} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  const conactInfo = {
    phoneNo: '+94 112 843 561',
    address: 'Church Garden\'s, Mahamegawatte.,',
    priestName: "Rev. Fr. Edmund Thilakaratne",
    location: "St Mary's Church Maharagama",
    officeDay: "Wednesday",
    times: ["8:30 AM - 12:30 PM (Wednesday)", "4:00 PM - 7:00 PM (Wednesday)"],
  };
  return {
    props: {
      conactInfo,
    },
  };
}
