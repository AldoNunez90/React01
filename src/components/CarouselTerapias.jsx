import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import terapia1 from "../Assets/img/terapia1.jpg";
import terapia2 from "../Assets/img/terapia2.jpeg";
import terapia3 from "../Assets/img/terapia3.jpg";
import terapia4 from "../Assets/img/terapia4.jpg";
import terapia5 from "../Assets/img/terapia5.jpeg";
import Modal1 from "./modals/Modal1";
import Modal2 from "./modals/Modal2";
import Modal3 from "./modals/Modal3";
import Modal4 from "./modals/Modal4";
import Modal5 from "./modals/Modal5";

const CarouselTerapias = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };
  return (
    <div className="carouselHero">
      <div className="carouselContainer">
        <Slider {...settings}>
          <div className="cardTerapia cardTer">
            <div>
              <img
                src={terapia1}
                alt="Terapia Social"
                className="imgTerapias"
              />
              <h3 className="tituloterapias">Terapia Social</h3>
              <p className="parrafoTerapias">
                Esencialmente, la socioterapia es una nueva alternativa de
                intervención profesional y una nueva terapia alternativa de
                atención, para personas y grupos con problemas interpersonales e
                intragrupales de índole social, es decir, de convivencia.
              </p>
            </div>
            <Modal1 />
          </div>
          <div className="cardTerapia cardTer">
            <div>
              <img
                src={terapia2}
                alt="Terapia Social"
                className="imgTerapias"
              />
              <h3 className="tituloterapias">Terapia Familiar</h3>
              <p className="parrafoTerapias">
                La terapia familiar aborda los problemas generados en el
                contexto de las relaciones familiares o con personas
                significativas en la vida de las personas. Se trata de un
                reconocido enfoque psicoterapéutico dirigido principalmente al
                sistema familiar como unidad social.
              </p>
            </div>
            <Modal2 />
          </div>
          <div className="cardTerapia cardTer">
            <div>
              <img
                src={terapia3}
                alt="Terapia Social"
                className="imgTerapias"
              />
              <h3 className="tituloterapias">Terapia Psiquiátrica</h3>
              <p className="parrafoTerapias">
                El Psiquiatra es un especialista en el campo de la salud mental
                y está capacitado no sólo a dar terapia y tratamiento, sino para
                guiarte hacia costumbres saludables. Tiene como elementos
                fundamentales: la prevención, el diagnóstico y el tratamiento de
                dichos trastornos.
              </p>
            </div>
            <Modal3 />
          </div>
          <div className="cardTerapia cardTer">
            <div>
              <img
                src={terapia4}
                alt="Terapia Social"
                className="imgTerapias"
              />
              <h3 className="tituloterapias">Terapia Psicológica</h3>
              <p className="parrafoTerapias">
                Los terapeutas podemos acercarnos a evaluar y comprender cuál es
                la Cognición del paciente (Pensamiento / Idea / Imagen /Creencia
                / Atribución) y cómo todas ellas se combinan a través de un
                conjunto organizado de pensamiento que llamamos creencias, que
                están conectadas a emociones y eventos en la vidas personal.
              </p>
            </div>
            <Modal4 />
          </div>
          <div className="cardTerapia cardTer">
            <div>
              <img
                src={terapia5}
                alt="Terapia Social"
                className="imgTerapias"
              />
              <h3 className="tituloterapias">Terapia Psicoterapéutica</h3>
              <p className="parrafoTerapias">
                La psicoterapia es una herramienta efectiva para el tratamiento
                de problemas emocionales o psicológicos que afectan tu calidad
                de vida, ayudándote a descubrir tus potencialidades e
                identificar posibles caminos a seguir con nuevas herramientas y
                habilidades.
              </p>
            </div>
            <Modal5 />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselTerapias;
