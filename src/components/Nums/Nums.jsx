import React from 'react'

import "./Nums.scss";
const Nums = ({ title, numLeft, numRight, text }) => {
  return (
    <div className={`Nums mb-16 flex-col ${numLeft ? "flex items-center justify-end" : numRight ? "flex items-center justify-start" : undefined}`}>
        <div className={`flex items-center mb-3`}>
            {numLeft ? <span className="Nums-num">{numLeft}</span> : undefined}
            <h3 className="Nums-title mr-3 ml-3">{title}</h3>
            {numRight ? <span className="Nums-num">{numRight}</span> : undefined}
        </div>

        <span className="Nums-text">{text}</span>
    </div>
  )
}

export default Nums;