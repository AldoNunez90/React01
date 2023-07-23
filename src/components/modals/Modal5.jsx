import React, { useState } from "react";
import Modal from "react-modal";
import terapia5 from "../../Assets/img/terapia5.jpeg";

const Modal5 = () => {
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
          <img src={terapia5} alt="imgTratamiento" className="imgTratamiento" />
          <h3 className="tituloModal">TERAPIAS PSICOTERAPÉUTICAS</h3>
          <p className="parrafoModal">
            La psicoterapia es una herramienta efectiva para el tratamiento de
            problemas emocionales o psicológicos que afectan tu calidad de vida,
            ayudándote a descubrir tus potencialidades e identificar posibles
            caminos a seguir con nuevas herramientas y habilidades.
            <br />
            <br /> 
            <span>
            Terapia Individual
            </span>
            <br />
            <br />
            Se sugiere un encuentro con un psicoterapeuta, generalmente una vez
            por semana, dependiendo del estado del paciente. El tratamiento está
            orientado a tratar problemas psicológicos para mejorar la calidad de
            vida y las relaciones interpersonales. Los trastornos más frecuentes
            son: <br/><br/>
            <span>
              Ansiedad 
              </span> <br/>
            La ansiedad es un estado emocional normal de los seres
            humanos relacionada con la adaptación a nuestro contexto. Si este
            estado comienza a perturbar tu calidad de vida, perdura en el tiempo
            y te afecta de manera leve o aguda es conveniente que hagas una
            consulta con un psicólogo. <br/><br/>
            <span>
              Depresión 
              </span> <br/>
            La depresión es un trastorno
            psicológico que genera mucho sufrimiento y afecta las actividades de
            la vida cotidiana, las relaciones interpersonales y la relación con
            uno mismo. <br/><br/>
            <span>
              Trauma 
              </span><br/> 
            Se suele entender como trauma psíquico a toda
            experiencia que te produce malestar emocional y puede dejar
            secuelas. <br/><br/>
            <span>
              Estrés 
              </span><br/> 
            Es el conjunto de respuestas fisiológicas que
            preparan al organismo para la acción frente a un agente estresor.
            Cuando el estrés forma parte de tu vida diaria y te acostumbrás a
            él, influye en tu salud y en tu vida en general. Una situación aguda
            de estrés puede manifestarse tanto a nivel físico, emocional o en la
            conducta. <br/><br/>
            <span>
              Angustia 
              </span> <br/>
            Es una sensación emocional displacentera que pone
            en estado de alerta al organismo, generando cambios en el estado
            corporal (sudoración, taquicardia, etc.). La angustia es una
            sensación universalmente experimentada por el ser humano, pero puede
            ser adaptativa o no, dependiendo de la magnitud con que se presente.
            Cuando la angustia se sostiene en el tiempo, es de gran intensidad y
            refleja una respuesta no adaptativa respecto de la situación que se
            presenta, pueden aparecer crisis de angustia o ataques de pánico.
          </p>
        </div>
        <button onClick={closeModal} className="btnVolver">Volver</button>
      </Modal>
    </div>
  );
};

export default Modal5;
