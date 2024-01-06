import React from "react";
import "./Contact.css";

const Contact = () => {
  let onsend = () => {
    alert("Sorry for the inconvenience. Please try later");
  };
  return (
    <div className="contact">
      <div className="contact-top">
        <h2>Get In Touch</h2>
        <p>
          Interested in doing a project together? Let's discuss your project!
          Always available for freelancing. Get in touch for doing projects
          together.
        </p>
      </div>
      <div className="contact-details">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows={10} placeholder="Enter your message" />
        <button className="aside-hirebtn aside-hirebtn2" onClick={onsend}>
          <i class="fa-brands fa-telegram"></i>Send now
        </button>
      </div>
    </div>
  );
};

export default Contact;
