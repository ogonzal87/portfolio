import React from "react";
import Link from "gatsby-link";

const CodeProjectCard = ({
  codeImg,
  description,
  title,
  buttonName,
  children,
  linkTo,
  ...rest
}) => (
  <li className="code-card" style={{ gridArea: "" }}>
    <img src={codeImg} alt="" />
    <div className="card-bottom-container">
      <div className="card-text-container">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <a
        className="ds-btn ds-btn-secondary ds-btn-medium ds-btn-fluid"
        href="https://instagram.com/a/r/?effect_id=1077625679243023"
        blank="_blank"
      >
        {buttonName || "Play with code"}
      </a>
    </div>
  </li>
);

export default CodeProjectCard;
