import React from 'react';

const PassionProjectCard = ({ numberImg, text, title, gridAreaName, badgeText, badgeType, children, ...rest }) => (
    <div className="passion-project-card__container" style={{ gridArea: gridAreaName }}>
        <div className="passion-project-card__wrapper">
            <img src={numberImg} alt="" className="passion-project__number" />
            <div className="passion-project__card">
                <h6 style={{ textTransform: 'uppercase' }}>{title}</h6>
                <div className={`passion-project-badge ${badgeType}`}>
                    {badgeText}
                </div>
                <p className=" ">{children}</p>
            </div>
        </div>
    </div>
)


export default PassionProjectCard;