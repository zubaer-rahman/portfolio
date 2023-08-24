import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Conatct Me</Typography>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            required
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
