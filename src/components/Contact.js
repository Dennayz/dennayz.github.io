import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button } from "./Button";
import "./styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    setMessage("Thank you for your message!");

    emailjs
      .sendForm(
        "service_mz97bdy",
        "template_tk83im9",
        e.target,
        "user_ji6yGcTxswBuJB2nCNN5Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    let messageTimer = setTimeout(() => {
      setMessage("");
    }, 5000); // wait 5 seconds, then reset to no message

    return () => {
      clearTimeout(messageTimer);
    };
  }, [message]);

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-header">Contact Me</h1>
      <div className="contact-container-info">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                id="name-id"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                minLength="5"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                id="email-id"
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                id="subject-id"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                minLength="5"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id="message-id"
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                minLength="10"
                required
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Send Message
              </Button>
            </div>
            <div className="submit-message">{message}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
