import "./App.css";
import logo from "./default-monochrome.svg";

function ComingSoon() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content"></main>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=31096105"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
}

export default ComingSoon;
