import sfondo from "./assets/images/bgg.png";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Cv from "./components/CV";
import Contacts from "./components/Contacts";
import { ImagesProvider } from "./context/ImagesContext";
import { BrowserRouter } from "react-router-dom";
import MenuMobile from "./components/MenuMobile";

function App() {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <div
          className="w-screen h-screen bg-cover bg-no-repeat fixed z-[-1]"
          style={{ backgroundImage: `url(${sfondo})` }}
        ></div>
        {window.innerWidth < 768 || window.innerHeight <= 600 ? (
          <MenuMobile />
        ) : null}
        <Intro />
        <Projects />
        <Cv />
        <Contacts />
      </ImagesProvider>
    </BrowserRouter>
  );
}

export default App;
