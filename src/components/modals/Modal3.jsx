import React, { useState } from "react";
import Modal from "react-modal";
import terapia3 from "../../Assets/img/terapia3.jpg";

const Modal3 = () => {
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
        <div className="modalContainer modal3">
          <img src={terapia3} alt="imgTratamiento" className="imgTratamiento" />
          <h3>TERAPIAS PSIQUIÁTRICAS</h3>
          <p className="parrafoModal">
            El Psiquiatra es un especialista en el campo de la salud mental y
            está capacitado no sólo a dar terapia y tratamiento, sino para
            guiarte hacia costumbres saludables. Tiene como elementos
            fundamentales: la prevención, el diagnóstico y el tratamiento de
            dichos trastornos.<br/><br/> En el caso de los principales trastornos de la
            salud mental, la mayoría de los estudios sugieren que un enfoque
            terapéutico que contemple la utilización conjunta de fármacos y
            psicoterapia resultará más eficaz que cualquiera de los métodos de
            tratamiento empleados por separado.
          </p>
        </div>
        <button onClick={closeModal} className="btnVolver">Volver</button>
      </Modal>
    </div>
  );
};

export default Modal3;
