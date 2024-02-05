import classNames from 'classnames/bind';
import React from 'react';
import s from './index.module.scss'
import {useNavigate} from "react-router-dom";
import {useUserContext} from "shared/providers/UserProvider";

const cx = classNames.bind(s)
const Header = () => {
  const navigate = useNavigate()
  const {setAuth, setUser, isAuth} = useUserContext()
  const logout = () => {
    localStorage.setItem('isAuth', JSON.stringify(false))
    setAuth(false)
    setUser(null)
    navigate('/sign-in')
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

export default Header;