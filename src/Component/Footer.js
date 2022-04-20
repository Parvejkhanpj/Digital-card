import React from "react";

import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-icon">
      {/* facebook */}
      <a href="example.com">
        <AiOutlineFacebook size={36} color="white" />
      </a>

      {/* Instagram */}
      <a href="example.com">
        <AiOutlineInstagram size={36} color="white" />
      </a>

      {/* twitter */}

      <a href="example.com">
        <AiOutlineTwitter size={36} color="white" />
      </a>

      {/* github */}
      <a href="example.com">
        <AiOutlineGithub size={36} color="white" />
      </a>
    </div>
  );
}
