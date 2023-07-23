import React, { useState } from "react";
import Modal from "react-modal";
import terapia4 from "../../Assets/img/terapia4.jpg";

const Modal4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btnModal">
        Leer más
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div className="modalContainer">
          <img src={terapia4} alt="imgTratamiento" className="imgTratamiento"/>
          <h3>TERAPIAS PSICOLÓGICAS</h3>
          <p className="parrafoModal">
            A través de la terapia psicológica los terapeutas podemos acercarnos
            a evaluar y comprender cuando estamos frente a un paciente cuál es
            su Cognición (Pensamiento / Idea / Imagen / Creencia / Atribución) y como
            todas ellas se combinan a través de un conjunto organizado de
            pensamiento que llamamos creencias, que están conectadas a emociones
            y eventos en la vidas personal.<br/><br/> Asimismo, el paciente es orientado
            para aprender a identificar cómo piensa, siente y actúa, lo cual
            impulsa a cambios en ciertos patrones de pensamientos que atrapan a
            los individuos en conflictos emocionales que afectan su calidad de
            vida. <br/><br/>Esta tiene por finalidad el diagnóstico, tratamiento,
            resolución y prevención de problemas de salud mental, emocionales o
            de conducta. Por tanto, la aplicación de las diferentes técnicas de
            psicología clínica sobre un paciente es lo que denominamos
            psicoterapia.
          </p>
        </div>
        <button onClick={closeModal} className="btnVolver">Volver</button>
      </Modal>
    </div>
  );
};

export default Modal4;
