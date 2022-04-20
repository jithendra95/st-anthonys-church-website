export default function AppAlert({ alert }) {
  return (
    <div className={`${alert.level== 0 ? "alert-message-red" : "alert-message"}`} id="alert">
      <strong>{alert.header}</strong> <br />
      {alert.body}
    </div>
  );
}
