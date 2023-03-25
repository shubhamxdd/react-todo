import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <div
        style={{ marginTop: "100px", minHeight: "90vh" }}
        className="container"
      >
        <a href="https://twitter.com/Shubham61363112" target="_blank" rel="noreferrer">
          <FaTwitter size="9rem" style={{ margin: "20px 80px 20px 30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/shubhamsisodia016/" target="_blank" rel="noreferrer">
          <FaLinkedin size="9rem" style={{ margin: "20px 80px 20px 30px" }} />
        </a>
        <a href="https://github.com/shubhamxdd" target="_blank" rel="noreferrer">
          <FaGithub
            size="9rem"
            color="black"
            style={{ margin: "20px 80px 20px 30px" }}
          />
        </a>
        <a href="https://t.me/Shubhammmmmmmm" target="_blank" rel="noreferrer">
          <FaTelegram
            size="9rem"
            color="#1e95d1"
            style={{ margin: "20px 80px 20px 30px" }}
          />
        </a>
        <a href="mailto:ssisodia128@gmail.com">
          <FaEnvelope size="9rem" style={{ margin: "20px 80px 20px 30px" }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
