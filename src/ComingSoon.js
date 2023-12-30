import "./App.css";
import logo from "./default-monochrome.svg";

function ComingSoon() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content">
        <h1>Get Ready to Inspire Greatness: Launching Soon!</h1>
      </main>
    </div>
  );
}

export default ComingSoon;
