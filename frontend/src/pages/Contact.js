import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  //FaLinkedin,
  //FaGithub,
  //FaInstagram,
  //FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state

  useEffect(() => {
    emailjs.init("X4jKFDWe5Cs_o1s0t"); // Replace with your actual EmailJS user ID
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Indicate the form is being submitted

    emailjs
      .sendForm("service_9cgzzag", "template_juu8k3r", form.current) // Replace with your service ID and template ID
      .then(
        (result) => {
          setMessageStatus("Message sent successfully!");
          setIsSubmitting(false); // Reset form submission state
          form.current.reset(); // Clear the form fields
          setTimeout(() => setMessageStatus(""), 5000); // Hide the status message after 5 seconds
        },
        (error) => {
          setMessageStatus("Failed to send the message. Please try again.");
          setIsSubmitting(false); // Reset form submission state
          setTimeout(() => setMessageStatus(""), 5000); // Hide the status message after 5 seconds
        }
      );
  };

  return (
    <main
      id="contact-section"
      className="text-light py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="text-center mb-4">
        <h1 className="mb-3">Contact Me</h1>
        <p>We value your opinion! Feel free to contact the GreenThreads team.</p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <a
          href="mailto:ethando@gmail.com"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <FaEnvelope className="me-2" /> GreenThreads@gmail.com
        </a>
        <div className="d-flex align-items-center">
          <FaPhone className="me-2" /> +1 (703) 675-6310
        </div>
        <a
          href="https://www.google.com/maps/place/Northern+Virginia,+VA"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <FaMapMarkerAlt className="me-2" /> Northern Virginia
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-50 max-w-lg p-3 rounded shadow-lg"
      >
        <div className="mb-3">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="form-control"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-100"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {messageStatus && (
          <div className="text-center mt-3">{messageStatus}</div>
        )}
      </form>
    </main>
  );
};

export default Contact;