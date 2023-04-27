import React, { useRef } from "react";
import { ReactComponent as LeftChevron } from "../../assets/chevron-left-svgrepo-com.svg";
import { ReactComponent as RightChevron } from "../../assets/chevron-right-svgrepo-com.svg";

const WhyThis = () => {
  const slideshow = useRef(null);

  const positionLeft = () => {
    if (slideshow.current?.children.length > 0) {
      //se obtiene el primer elemento
      const index = slideshow.current?.children.length -1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
      
      slideshow.current.style.transition = 'none';

      const lengthReasons = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${lengthReasons}px)`;
    
      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform =`translateX(0)`
      })
    }
  };

  const positionRight = () => {
    if (slideshow.current?.children.length > 0) {
      //se obtiene el primer elemento
      const firstElement = slideshow.current.children[0];

      //transición para el slideshow
      slideshow.current.style.transition = `300ms ease-out all`;

      //obtengo el tamaño de pantalla que ocupa el card
      const lengthReasons = slideshow.current.children[0].offsetWidth;

      //movimiento a derecha
      slideshow.current.style.transform = `translateX(-${lengthReasons}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        //cambiar de posición el 1er elemento y lo  pasa al final
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener('transitionend', transition)
      }

      //una vez que se mueve la card se ejecuta la función transition
      slideshow.current.addEventListener('transitionend', transition)
    }
  };

  return (
    <div className="whyThisResponse">
      <div className="recInfoBase">
        <h4>¿Por qué se propone?</h4>
        <p> A raíz del crecimiento urbano y la tendencia hacia la metropolización, los sistemas urbanos se expanden rápidamente, generando desequilibrios significativos con respecto a las zonas centrales. Ante estos nuevos escenarios, se requieren herramientas innovadoras para involucrar a las personas como actores clave en las transformaciones socioespaciales que se están produciendo en las áreas urbanas.</p>
      </div>
      {/* <div className="recY"  ref={recYHeight}></div> */}
      {/* <div className="webSectionWhy"  style={{ overscrollBehavior: 'contain' }}> */}
      <div className="reasonsWhy">
        <div className="contenedorReasonsWhy" ref={slideshow}>
          <div className="reason" style={{ background: "pink" }}></div>
          <div className="reason" style={{ background: "yellow" }}></div>
          <div className="reason" style={{ background: "black" }}></div>
          <div className="reason" style={{ background: "green" }}></div>
        </div>
        <div className="controls">
          <button onClick={positionLeft}>
            <LeftChevron style={{ height: "30px", width: "auto" }} />
          </button>
          <button onClick={positionRight}>
            <RightChevron style={{ height: "30px", width: "auto" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyThis;
