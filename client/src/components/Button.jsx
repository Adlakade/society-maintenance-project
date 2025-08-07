import React from 'react'
import "../css/button.css"

const Button = ({btnname}) => {
  return (
    <>
    <button className='commanbtn'>
        <i className="fi fi-rr-arrow-small-right"></i>
        <div className="btntext">
            {btnname}
        </div>
    </button>
    </>
  )
}

export default Button