import "./App.css";
import logo from "./default-monochrome.svg";
import { inject } from "@vercel/analytics";

inject();

function ComingSoon() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content"></main>
      <p class="quotes">
        The first step towards getting somewhere is to decide you're not going
        to stay where you are. - J.P. Morgan
      </p>

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
