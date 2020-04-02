import React from "react";

const CodeProjectCard = ({
  src,
  description,
  title,
  buttonName,
  children,
  href,
  ...rest
}) => (
  <li className="code-card" style={{ gridArea: "" }}>
    <img src={src} alt="" />
    <div className="card-bottom-container">
      <div className="card-text-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <a
        className="og-button--secondary og-button--medium "
        href={href}
        target="_blank"
      >
        {buttonName || "Play with code"}
      </a>
    </div>
  </li>
);

export default CodeProjectCard;
