import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Entrega from './components/project/Proyect';
import Video from './components/video/Video';
import { useState } from 'react';


function App() {

  const sectionsHome = ["Causcari", "Que es","Donde"]
  // const sectionsHome = ["Causcari", "Que es","Donde", "Por que", "Como"]
  const [activeSection, setActiveSection] = useState();

  const sectionsProyect = ["Guaymallén", "Indicadores","Terreno", "Análisis", "Código", "Premisas", "Idea", "Propuesta"]
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
