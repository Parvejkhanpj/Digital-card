import React from "react";
import myimg from "./images/profile.png";

export default function Intro() {
  return (
    <div className="Intor">
      <img className="intro--img" src={myimg} alt="authorimage" />
      <h1 className="tittle-name">Parvej khan</h1>
      <h2 className="tittle-tag">Froend Developer</h2>
      <h3 className="tittle-link">
        <a href="www.digitalparvej.com">Parvejkham.com</a>
      </h3>
    </div>
  );
}
