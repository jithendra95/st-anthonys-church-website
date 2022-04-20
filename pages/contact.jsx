import Head from "next/head";
import React, { useEffect } from "react";
import AppContact from "../components/contact";
import Layout from "../components/layout";
import { getContactInfo } from "../data/contact";
import { useRouter } from "next/router";
import { analytics } from "../firebase/firebase";
import { logEvent, setCurrentScreen } from "firebase/analytics";

export default function ContactPage({conactInfo}) {
  const routers = useRouter();
  useEffect(() => {
      const logAnalytics = (url) => {
        setCurrentScreen(analytics, url);
        logEvent(analytics, 'contact_view');
      };

      routers.events.on('routeChangeComplete', logAnalytics);
      //For First Page
      logAnalytics(window.location.pathname);

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logAnalytics);
      };
  }, []);

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

export async function getServerSideProps() {
  const conactInfo   = await getContactInfo();
  return {
    props: {
      conactInfo,
    },
  };
}
