import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
