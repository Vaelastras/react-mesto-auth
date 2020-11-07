import React from "react";
import successLogo from '../images/Success.png'
import failLogo from '../images/Fail.png'

const InfoTooltip = ({isOpen, onClose, isError}) => {
  const textError =  'Что-то пошло не так! Попробуйте еще раз.'
  const imageStatus = (`${isError ? successLogo : failLogo}`)


  return(
    <div className="popup popup_active">
      <div className="popup__container">
        <button className="popup__close" type="button"/>
        <div className="popup__wrapper">
          <img className="popup__infostatus" src={imageStatus} alt="statusLogo"/>
          <h3 className="popup__title popup__text">{textError}</h3>
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip