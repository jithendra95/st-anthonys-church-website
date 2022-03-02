import { useRouter } from "next/router";
import React from "react";

export default function AppHeader(props) {
    const router = useRouter();
 
    return (
      <nav className="fh5co-nav" role="navigation">
        <div className="container-wrap">
          <div className="top-menu">
            <div className="row">
              <div className="col-md-12 col-offset-0 text-center">
                <div id="fh5co-logo">
                  <a href="/">St Mary's Church Maharagama</a>
                </div>
              </div>
              <div className="col-md-12 col-md-offset-0 text-center menu-1">
                <ul>
                  <li className={router.pathname == "/" ? "active" : ""}>
                    <a href="/">Home</a>
                  </li>
                  <li className={router.pathname == "/masses" ? "active" : ""}>
                    <a href="/masses">Masses & Services</a>
                  </li>
                  {/* <li className={router.pathname == "/association" ? "active" : ""}>
                    <a href="/association">Sunday School</a>
                  </li > */}
                  <li className={router.pathname == "/contact" ? "active" : ""}>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
