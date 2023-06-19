import React from "react";
import "./styles.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me!</h1>
      <p className="contact-paragraph">
        Ready to take your project to the next level? Whether you have a
        question, want to collaborate, or just want to say hello, I'd love to
        hear from you. Fill out the form below, and I'll get back to you as soon
        as possible.
      </p>
      <form name="contact" method="POST" netlify>
        <input
          type="text"
          id="first-name"
          name="name"
          placeholder="First Name"
        />
        <br />
        <br />

        <input
          type="text"
          id="last-name"
          name="last name"
          placeholder="Last Name"
        />
        <br />
        <br />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@example.com"
        />
        <br />
        <br />

        <textarea
          id="message"
          name="message"
          rows="4"
          cols="50"
          placeholder="Type your message here"
        />
        <br />
        <br />

        <input id="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
