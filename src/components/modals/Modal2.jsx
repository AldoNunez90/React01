import React, { useState } from "react";
import Modal from "react-modal";
import terapia2 from "../../Assets/img/terapia2.jpeg";

const Modal2 = () => {
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
          <img src={terapia2} alt="imgTratamiento" className="imgTratamiento" />
          <h3>TERAPIA FAMILIAR</h3>
          <p className="parrafoModal">
            La terapia familiar aborda los problemas generados en el contexto de
            las relaciones familiares o con personas significativas en la vida
            de las personas. Se trata de un reconocido enfoque psicoterapéutico
            dirigido principalmente al sistema familiar como unidad social.
            <br />
            <br />
            Los principales objetivos de la terapia familiar son:
            <br />
            <br />
            • La mejora del funcionamiento de la familia a diferentes niveles.{" "}
            <br />
            <br />
            • El aumento de la comprensión mutua y el apoyo emocional entre los
            miembros de la misma. 
            <br />
            <br />
            • El desarrollo de estrategias de afrontamiento y habilidades
            de resolución de problemas ante diferentes dilemas y situaciones de
            la vida. <br/><br/>
            La terapia familiar y la práctica sistémica está
            especialmente indicada cuando el objetivo es mejorar la capacidad de
            los miembros de la familia para apoyarse mutuamente. Posibilitar que
            los miembros de la familia puedan usar más eficientemente sus
            recursos de apoyo puede ser vital para ayudarles a gestionar las
            fases de transición del desarrollo familiar o los acontecimientos
            vitales estresantes tales como una enfermedad grave. <br/><br/>En el caso de
            los problemas de consumo, la familia puede asistir a terapia
            familiar mientras que la persona con problemas de consumo participa
            en un tratamiento residencial. A veces, la familia puede participar
            en terapia familiar, incluso cuando la persona con este problema no
            buscó un tratamiento propio.
          </p>
        </div>
        <button onClick={closeModal} className="btnVolver">Volver</button>
      </Modal>
    </div>
  );
};

export default Modal2;
