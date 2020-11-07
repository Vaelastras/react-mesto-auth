import React from "react";


const Register = () => {
  return (
    <form className='login__container'>
      <h3 className='popup__title login__title'>Регистрация</h3>
      <input className='popup__input login__input' type='text' name='email' placeholder='Email'/>
      <input className='popup__input login__input' type='password' name='password' placeholder='Пароль'/>
      <button className='popup__submit login__submit' type='submit'>Зарегистрироваться</button>
      <p className="popup__login-confirm">
        <a className='popup__link' href="#">Уже зарегистрированы? Войти</a>
      </p>
    </form>

  )
};

export default Register;
