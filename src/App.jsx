import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Routes1 from "./Components/Routes";

function App() {
  // console.log("helo");
  return (
    <div className="App scrollable-container">
      <Home />
      <About />
      {/* <Route path="/about" component={About} /> */}
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Routes1 /> */}
    </div>
  );
}

export default App;