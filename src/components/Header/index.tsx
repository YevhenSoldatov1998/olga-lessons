import classNames from 'classnames/bind';
import React from 'react';
import s from './index.module.scss'
import {isAuth} from "../../helpers/auth";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(s)
const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('isAuth', JSON.stringify(false))
    window.location.reload()
  }
  const login = () => navigate('/sign-in')

  return (
    <header className={cx('Header')}>
      <div className={cx('Logo')}>LOGO</div>


      {isAuth
        ? <button className={cx("Btn")} onClick={logout}>
          &larr; Вийти
        </button>
        : <button className={cx("Btn")} onClick={login}>Увійти
          &#8594;
        </button>}
    </header>
  );
};

export default Header;˚