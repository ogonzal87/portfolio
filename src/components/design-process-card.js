import React from 'react'
import Badge from './badge'

const DesignProcessCard = ({ numberImg, text, title, gridAreaName, badgeText, badgeType, ...rest}) => (
  <div className="design-process-card__container" style={{ gridArea: gridAreaName }}>
    <div className="design-process-card__wrapper">
      <img src={numberImg} alt="" className="design-process__number" />
      <div className="design-process__card">
        <h5 style={{textTransform: 'uppercase'}}>{title}</h5>
        <p>{text}</p>
        <div className={`design-process-badge ${badgeType}`}>
          {badgeText}
        </div>
      </div>
    </div>   
  </div>
)


export default DesignProcessCard;