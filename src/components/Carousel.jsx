import React from "react";
import Slider from "react-slick";
import nosotros1 from "../Assets/img/nosotros1.jpeg";
import nosotros2 from "../Assets/img/nosotros2.jpeg";
import nosotros5 from "../Assets/img/nosotros5.jpeg";
import nosotros6 from "../Assets/img/nosotros6.jpeg";
import nosotros7 from "../Assets/img/nosotros7.jpeg";
import nosotros8 from "../Assets/img/nosotros8.jpeg";
import nosotros9 from "../Assets/img/nosotros9.jpeg";
import nosotros10 from "../Assets/img/nosotros10.jpeg";


const CarouselNosotros = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }
      ]
  };
  return (
    <div className="carouselHero">
      <div className="carouselContainer carouselContainerNos">
        <Slider {...settings}>
          <div className="cardNosotros">
            <img src={nosotros1} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros2} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros5} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros6} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros7} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros8} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros9} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          <div className="cardNosotros">
            <img src={nosotros10} alt="Nuestro espacio" className="imgTerapias" />
          </div>  
          </Slider>
      </div>
      
    </div>
  );
};

export default CarouselNosotros;
