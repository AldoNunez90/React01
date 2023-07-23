import '../Styles/StyleTerapias.css'
import CarouselTerapias from './CarouselTerapias';

const Terapias = () => {
  return (
    <div className="terapiasContainer" >
      <h3>Tratamientos</h3>
      <p className="terapiasIntro terapiasTop">
        Todos nuestros tratamientos son de asistencia voluntaria, en caso de ser
        necesario, tras un exhaustivo diagnóstico diferencial, implementando
        tratamientos.<br/> Contamos con un equipo terapéutico interdisciplinario
        altamente capacitado, conformado por psicólogos, psiquiatras, médicos,
        docentes, trabajadores sociales,<br/> operadores socio-terapéuticos,
        talleristas, entre otros.
      </p>
      <div>
        <CarouselTerapias />

       </div>
      <p className="terapiasIntro" id='contacto'>
        En nuestra comunidad colaboramos con la recuperación de los
        familiares, tanto como la de los pacientes. Tenemos la convicción de que
        los cambios en la actitud de la familia<br/> favorecerán el progreso de los
        mismos y esto sumando las herramientas aportadas por <span>Clínica Atravezar </span>
        nos conducirán más rápidamente a la recuperación de la enfermedad.
      </p>
    </div>
  );
};

export default Terapias;
