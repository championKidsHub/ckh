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

      {/* <a
        href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FMagicalResolutionTemplate.pdf?alt=media&token=a303ff37-e97e-453f-a1cd-1757e8bc289c"
        download="MagicalResolutionTemplate_ChampionKidsHub.pdf"
        class="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Magical Resolution
      </a>

      <a
        href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FMostImportantTask.pdf?alt=media&token=abff32fd-326d-4bd4-8699-9c4ce0c3acd4"
        download="MostImportantTask_ChampionKidsHub.pdf"
        class="download-button alternative-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Most Important Task
      </a> */}

      <a
        href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FConsistency%20Tracker.pdf?alt=media&token=9d476dca-d222-4a52-9234-a1ee6d5e455c"
        download="ConsistencyTracker_ChampionKidsHub.pdf"
        class="download-button alternative-button1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Consistency Tracker
      </a>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/championkidshub.appspot.com/o/public%2FReframing_ChampionKidsHub.pdf.pdf?alt=media&token=391c7f41-30d0-489f-a243-5366efbfdc33"
        download="Reframing_ChampionKidsHub.pdf"
        class="download-button alternative-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Reframing for Success
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

      <footer class="contact-info">
        <p>
          Have questions? Get in touch at{" "}
          <a href="mailto:info@championkidshub.com">info@championkidshub.com</a>
        </p>
      </footer>
    </div>
  );
}

export default ComingSoon;
