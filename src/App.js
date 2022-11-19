import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <About />
        <Projects />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
