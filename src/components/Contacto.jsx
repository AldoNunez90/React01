import React, { useRef, useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import "../Styles/StyleContacto.css";
import Spinner from "./modals/Modal6";
import ReCAPTCHA from "react-google-recaptcha";

const Contacto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [captchaValido, setCaptchaValido] = useState(null);
  const [tel, setTel] = useState("");
  const [telValido, setTelValido] = useState(true);
  const [mail, setMail] = useState("");
  const [mailValido, setMailValido] = useState(true);

  const validarTel = (e) => {
    setTel(e.target.value);
  };
  const captcha = useRef(null);
  const form = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    window.location.replace("");
  };
  const openSpinner = () => {
    document.getElementById("loader").style.display = "block";
    document.getElementById("spinnerContainer").style.display = "flex";
  };

  const closeSpinner = () => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("spinnerContainer").style.display = "none";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (tel.length !== 10) {
      setTel("");
      setTelValido(false);
    } else {
      setTelValido(true);
      if (
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
          mail.target.value
        )
      ) {
        setMailValido(true);
        if (captcha.current.getValue()) {
          setCaptchaValido(true);
          openSpinner();
          emailjs
            .sendForm(
              "service_huh3m24",
              "template_ms40cei",
              form.current,
              "KVZsqULY1UZEMlYsK"
            )
            .then(
              () => {
                closeSpinner();
                openModal();
              },
              (error) => {
                console.log(error.text);
              }
            );
        } else {
          setCaptchaValido(false);
        }
      } else {
        setMailValido(false);
      }
    }
  };

  function onChange() {
    if (captcha.current.getValue()) {
      setCaptchaValido(true);
    }
  }

  return (
    <div className="contactoContainer">
      <div className="spinnerContainer" id="spinnerContainer">
        <Spinner />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        id="modalForm"
      >
        <div className="modalContainer">
          <p>Gracias por contactarnos.</p>
          <p>Su mendaje fue enviado correctamente.</p>
          <p>Nos pondremos en contacto a la brevedad.</p>
        </div>
        <button onClick={closeModal} className="btnVolver">
          Volver
        </button>
      </Modal>
      <h3>CONTACTO</h3>
      <form ref={form} onSubmit={sendEmail} className="formContacto">
        <label htmlFor="user_name" className="labelForm">
          Nombre*
        </label>
        <input
          type="text"
          placeholder="Ingresa tu name"
          className="inputForm"
          name="user_name"
          id="user_name"
          required
        />
        <hr className="hrForm" />
        <label htmlFor="user_phone" className="labelForm">
          Teléfono*
        </label>
        <input
          type="number"
          name="user_phone"
          id="user_phone"
          placeholder="Ingresa tu teléfono"
          className="inputForm"
          size="10"
          onChange={validarTel}
          required
        />
        {telValido === false && (
          <div className="phoneContainer">
            <p>Verifique el número de teléfono (si es celular, sin 0 ni 15)</p>
          </div>
        )}
        <hr className="hrForm" />
        <label htmlFor="user_email" className="labelForm">
          E-mail*
        </label>
        <input
          type="mail"
          name="user_email"
          id="user_email"
          placeholder="Ingresa tu email"
          className="inputForm"
          onChange={setMail}
          required
        />
        {mailValido === false && (
          <div className="mailContainer">
            <p>Verifique la dirección de correo electrónico</p>
          </div>
        )}
        <hr className="hrForm" />
        <label htmlFor="message" className="labelForm mensajeForm">
          Mensaje*
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="inputForm"
          placeholder="Escribe tu message aquí"
          cols="30"
          rows="6"
          required
        ></textarea>
        <hr className="hrForm" />
        <div className="captchaContainer">
          {captchaValido === false && (
            <div>
              <p>Por favor verifique el captcha</p>
            </div>
          )}
          <ReCAPTCHA
            ref={captcha}
            sitekey="6Lef80onAAAAANQ_6g4F7m4rSLlhj_VjnwFG9H4b"
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Enviar" className="submitForm" />
      </form>
    </div>
  );
};
export default Contacto;
