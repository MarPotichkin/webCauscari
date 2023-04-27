import React from "react";
import iconIdea from "../../assets/iconIdea.png"

const Idea = () => {
  return (
    <div className="containerIdea">
      <div className="containerTextIdea">
        <img src={iconIdea} style={{height: "40%", width: "auto"}} alt="icono"></img>
      </div>
      <div className="containerPoints">
        <div className="textIdea">
          <p className="numberSection">05</p>
          <h4>Idea</h4>
          <p className="descriptionLocation" style={{fontWeight: "bold"}}>"Historias entrelazadas"</p>
          <p>
            Capas de historia, donde la memoria de cada una se imprimió en la siguiente, formando
            una compleja trama de relatos y culturas entrelazadas.
            </p>
            <p>
            Cada espacio es un lienzo en el que se cuenta la historia de su gente,
            cada capa de su palimpsesto cuenta una verdad revelada,
            una historia que vive y respira en la arquitectura presente.
            </p>
            <p>
            Todo esto se integra en una narrativa que no
            sólo cuenta la historia de la ciudad, sino que también muestra cómo
            la arquitectura puede ser una expresión viva y evolutiva de la
            cultura y las personas que la habitan.
            </p>
            <p>
            La idea consiste en una secuencia de jardines conectados que entretejen las capas 
            y diversas actividades conformando una secuencia urbana,
            aprovechando las condiciones cambiantes de la zona y su contexto para forjar diversos ambientes.
            
          </p>
          {/* <p className="descriptionLocation">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Idea;
