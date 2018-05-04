import React from 'react';

const DesignProcessCard = ({ numberImg, text, title, gridAreaName }) => (
  <div className="design-process-card__container" style={{gridArea: gridAreaName}}>
    <img src={numberImg} alt="" className="design-process__number"/>
    <div className="design-process__card">
      <h4>{title}</h4>
      <p className="ds-subheading-text-style">
        {text}
      </p>
    </div>
  </div>
)


export default DesignProcessCard;