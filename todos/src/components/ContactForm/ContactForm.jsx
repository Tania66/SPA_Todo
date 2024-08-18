import React, { useState } from "react";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <form className="form_contact" onSubmit={handleSubmit}>
        <h2>Contact us</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form_contact_input"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
            required
          />
          <GoPerson className="contact_form_icon" />
        </div>

        <div className="form-group">
          <input
            type="tel"
            className="form_contact_input"
            placeholder="+380"
            value={phone}
            onChange={handleChangePhone}
          />
          <LuPhone className="contact_form_icon" />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            rows="4"
            className="form_contact_textarea"
            placeholder="Message"
            value={message}
            onChange={handleChangeMessage}
            required
          ></textarea>
        </div>
        <button type="submit" className="form_contact_btn">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
