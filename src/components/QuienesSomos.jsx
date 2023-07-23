import "../Styles/StyleQuienes.css";

const QuienesSomos = () => {
  return (
    <div className="quienesContainer">
      <h2 className="quienesTitulo">QUIÉNES SOMOS</h2>
      <div className="QuienesParrafoContainer">
        <p className="quienes">
          <span>Fundación Atravezar</span> brinda un servicio que responde a las
          necesidades <br className="brQuienes"/> más urgentes de las personas que padecen problemas de
          adicción.<br className="brQuienes"/> Somos una comunidad de puertas abiertas, libre de drogas y
          alcohol.
        </p>
        <p className="quienes">
          Damos tratamiento a todos nuestros residentes guiando y acompañando<br className="brQuienes"/> en
          todas sus etapas de recuperación para lograr esa vida que merecen.
          <br />
          <span>¡Una vida libre de sustancias es posible!</span>
        </p>
        <p className="quienes quienesFinal">
          Para esto es fundamental el apoyo y acompañamiento de la familia,<br className="brQuienes"/>
          logrando así una mejor contención en el camino de recuperación.
        </p>
        <div id="tratamientos"></div>
      </div>
    </div>
  );
};

export default QuienesSomos;
