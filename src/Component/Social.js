import React from "react";
import { MailFilled } from "antd";

export default function Social() {
  return (
    <div className="social-btn">
      <button className="email-btn" type="primenry" icon={<MailFilled />}>
        Email
      </button>
      <button className="link-btn">Linkdln</button>
    </div>
  );
}
