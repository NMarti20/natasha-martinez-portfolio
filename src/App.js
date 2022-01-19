import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
