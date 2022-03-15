export default function AppAnnouncement({ announcements }) {
  return (
    <div id="fh5co-events">
      <div className="events-entry">
        <div className="row animate-box">
          <div className="col-sm-6 col-sm-offset-3 text-center fh5co-heading">
            <h2>Announcements</h2>
          </div>
        </div>

        {announcements.map((announcement, j) => {
          return (
            <div className="sub-items" key={j}>
              <h3>{announcement.title}</h3>
              <ul>
                {announcement.sub_items.map((item, i) => {
                  return <li key={`${announcement.title}_${i}`}>{item}</li>;
                })}

                <a href={announcement.link}>{announcement.linkText}</a>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
