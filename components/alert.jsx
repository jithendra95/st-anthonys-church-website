export default function AppAlert({ alert }) {
  return (
    alert.body !== "" ? (
        <div className="row alert-container">
          <div className="col-sm-12 fh5co-heading">
            
              <div
                className={`${
                  alert.level == 0 ? "alert-message-red" : "alert-message"
                }`}
                id="alert"
              >
                <strong>{alert.header}</strong> <br />
                {alert.body}
              </div>
      </div>
    </div> ) : (
      []
    )
  );
}
