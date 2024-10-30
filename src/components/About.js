import React from "react";
import Links from "./Links/Links";

function About({bio, github, linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {bio && <p>{bio}</p>}
      <Links github={github} linkedin={linkedin} />

    </div>
  );
}

export default About;
