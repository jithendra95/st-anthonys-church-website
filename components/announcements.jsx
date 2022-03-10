export default function AppAnnouncement({ announcements }) {
  return (
    <div id="fh5co-events">
      <div className="events-entry">
        <div className="row animate-box">
          <div className="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
            <h2>Announcements</h2>
            <p>Updated </p>
          </div>
        </div>

        <div className="sub-items">
          <h3>Baptism</h3>
          <ul>
            <li>
              Every 2nd Saturday of the month at 8.30am (unless it is announced
              otherwise )
            </li>
            <li>
              Fill this form and hand it over to office at least by Wednesday of
              the 2nd week of the month
            </li>
            <a href="static/assets/files/baptism_form.pdf">Download Baptism Form</a>
          </ul>
        </div>
      </div>
    </div>
  );
}
