import "./App.css";
import ComingSoon from "./ComingSoon";
import Subscribe2 from "./Subscribe2";
import Subscribe from "./Subscribe";
import ComingSoon2 from "./ComingSoon2";
import { inject } from "@vercel/analytics";

inject();

function App() {
  // return <ComingSoon />;
  // return <ComingSoon2 />;
  return <Subscribe />;
  // return <Subscribe2 />;
}

export default App;
