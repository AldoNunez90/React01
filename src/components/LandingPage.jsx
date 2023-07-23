import React from 'react';
import Header from './Header';
import QuienesSomos from './QuienesSomos';
import Separador from './ImgSeparador';
import Footer from './Footer';
import Contacto from './Contacto';
import Terapias from './Terapias'
import CarouselNosotros from './Carousel';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <CarouselNosotros />
      <QuienesSomos />
      <Separador />
      <Terapias />
      <Contacto />
      <Footer />
      </div>
  );
};

export default LandingPage;
