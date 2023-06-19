import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="About-container">
      <div className="profile">
        <img
          src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/05/Tony-Stark-from-Iron-Man.jpg"
          alt="Memoji with a pink background"
          width="200"
          height="200"
        />
        <div className="Experience">
          <h3>Experience</h3>
          <ul>
            <li>
              <b>iOS Development:</b> Swift, SwiftUI, Objective-C, XCODE
            </li>
            <li>
              <b>Android Development:</b> Java, Kotlin, Android Studio
            </li>
            <li>
              <b>Web Development:</b> React, Javascript, Typescript, MongoDB,
              Node.JS
            </li>
            <li>
              <b>UX/UI:</b> Figma, Sketch, Adobe Suite
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-text">
        <h1>About Me</h1>
        <h3>Expert Software Engineer Crafting Captivating Designs</h3>
        <p>
          I am a software engineer who thrives at the intersection of technology
          and captivating design, bringing a unique blend of creativity and
          technical expertise to my work. With a passion for creating
          cutting-edge digital experiences and a drive to craft exceptional user
          interfaces, I am dedicated to developing innovative and seamless
          solutions that leave a lasting impression.
        </p>
        <h3>Mastering Immersive User Experiences Across Domains</h3>
        <p>
          My journey as a software engineer has taken me across various domains,
          where I have mastered the art of creating immersive user experiences.
          From iOS to React, Android to frontend and backend development, I have
          contributed to diverse projects spanning e-commerce platforms, social
          media apps, educational tools, and immersive gaming experiences.
        </p>
        <h3>Meticulous Coding and Aesthetics for Exquisite UI</h3>
        <p>
          I approach coding and programming with the same attention to detail
          and aesthetics as crafting an exquisite user interface. Just as a
          meticulously designed interface makes a bold statement, I strive to
          create digital solutions that captivate and engage users, seamlessly
          integrating functionality and visual appeal. With a strong foundation
          in design principles and aesthetics, I bring a unique perspective to
          every project.
        </p>
        <p>
          As a software engineer, I am constantly seeking new challenges and
          opportunities to refine my skills and expand my knowledge. I thrive on
          pushing the boundaries of UX/UI design, always staying up-to-date with
          the latest industry trends and best practices. With a commitment to
          delivering exceptional user experiences, I am driven to create digital
          solutions that delight and inspire.
        </p>
        <p>
          Let's collaborate on your next project and transform your vision into
          an extraordinary user experience.
        </p>
      </div>
    </div>
  );
}
