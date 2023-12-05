import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Blocks from "./components/Blocks";
import Industry from "./components/Industry";
import Community from "./components/Community";
import Templates from "./components/Templates";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Feature />
      <Portfolio />
      <Tools />
      <Blocks />
      <Industry />
      <Community />
      <Templates />
      <Footer />
    </>
  );
}

export default App;
