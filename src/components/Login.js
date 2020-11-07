import React from "react";

const Login = () => {
  return (
    <form className='login__container'>
      <h3 className='popup__title login__title'>Вход</h3>
      <input className='popup__input login__input' type='text' name='email' placeholder='Email'/>
      <input className='popup__input login__input' type='password' name='password' placeholder='Пароль'/>
      <button className='popup__submit login__submit' type='submit'>Войти</button>
    </form>

  )
};

export default Login;

