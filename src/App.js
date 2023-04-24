import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Investigation from './components/investigation/Investigation';
import Entrega from './components/project/Proyect';
import Video from './components/video/Video';
import { useEffect, useState } from 'react';


function App() {

  const sectionsHome = ["presentation", "whatIs","where", "whyThis", "howIs"]
  const [activeSection, setActiveSection] = useState();

  const sectionsProyect = ["location", "indicators","land", "analysis", "regulation", "premises", "idea", "proposal"]
  const [activeSectionProyect, setActiveSectionProyect] = useState();
  
  // const [pageHeight, setPageHeight] = useState();

  //   useEffect(() => {
  //       setPageHeight(window.innerHeight);
  //       window.addEventListener('resize', (e) => {
  //         setTimeout(() => {
  //           setPageHeight(window.innerHeight);
  //         }, 300);
  //       });
  //     }, []);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home sectionsHome={sectionsHome} activeSection={activeSection} setActiveSection={setActiveSection} />}/>
        <Route path='/introduccion' element={<Home sectionsHome={sectionsHome} activeSection={activeSection} setActiveSection={setActiveSection} />}/>
        <Route path='/entrega' element={<Entrega sectionsProyect={sectionsProyect} activeSectionProyect={activeSectionProyect} setActiveSectionProyect={setActiveSectionProyect}/>}/>
        <Route path='/video' element={<Video />}/>
      </Routes>
    </div>
  );
}

export default App;
