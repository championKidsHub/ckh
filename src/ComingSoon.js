import "./App.css";
import logo from "./default-monochrome.svg";

function ComingSoon() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content"></main>
      <p class="quotes">
        "The secret of getting ahead is getting started." – Mark Twain
      </p>

      <a
        href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FMagicalResolutionTemplate.pdf?alt=media&token=a303ff37-e97e-453f-a1cd-1757e8bc289c"
        download="MagicalResolutionTemplate_ChampionKidsHub.pdf"
        class="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Magical Resolution Template
      </a>

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
