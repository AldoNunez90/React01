import React, { useState } from "react";
import Modal from "react-modal";
import terapia1 from '../../Assets/img/terapia1.jpg'
import './StylesModal.css'
const Modal1 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btnModal">Leer más</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal} >
            <div className="modalContainer">
            <img src={terapia1} alt="imgTratamiento" className="imgTratamiento"/>
            <h3>TERAPIA SOCIAL</h3>
            <p className="parrafoModal">Esencialmente, la socioterapia es una nueva alternativa de intervención profesional y una nueva terapia alternativa de atención, para personas y grupos con problemas interpersonales e intragrupales de índole social, es decir, de convivencia. <br/><br/> Consiste en una estrategia socio-pedagógica para el cambio como arte de coordinar las acciones y de obrar para alcanzar un objetivo de carácter promocional, preventivo y asistencial. Mediante esta estrategia logramos en el destinatario concretar cambios cognoscitivos puntuales y brindarle una adecuada capacitación social que le posibilite una saludable evolución personal y social. <br/><br/> En socioterapia se desarrolla el área consciente. Es por ello que empleamos estrategias socio-pedagógicas. Es decir, capacitamos al paciente para superar la situación socio-problemática que lo tiene imposibilitado para evolucionar en sus relaciones interpersonales. El paciente aprende con esas estrategias a convivir de modo saludable en sociedad y a desarrollar y emplear sus propios recursos para edificar una vida con bienestar en los aspectos familiares y sociales, o sea, con-vivenciales. <br/><br/> La historia personal es el resultado de la suma de decisiones de la vida de una persona. Las decisiones, que representan las actitudes, ideas, creencias, valores y aptitudes personales, por un lado y las situaciones particulares vivenciadas, por el otro. Con estos elementos trabaja el terapeuta social en la reconstrucción de un nuevo proyecto de vida, aportando información y conocimiento que facilite el desarrollo de nuevas aptitudes y habilidades sociales. Se trata de una revisión de su historia que le permita al individuo extraer hechos y datos positivos y negativos. Fortaleciendo los primeros y modificando o cambiando los segundos.</p><br/>
            </div>
        <button onClick={closeModal} className="btnVolver">Volver</button>
      </Modal>
    </div>
  );
};

export default Modal1;