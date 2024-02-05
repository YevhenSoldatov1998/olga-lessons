import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import classNames from 'classnames/bind';
import s from './index.module.scss';
import {useUserContext} from "../../providers/UserProvider";

const cx = classNames.bind(s);

const AuthLayout = () => {
  const {isAuth} = useUserContext()
  if(isAuth) {
    return <Navigate to='/'/>
  }
  return (
    <section className={cx('Component')}>
      <div className={cx("Container")}>
        <Outlet/>
      </div>
    </section>
  );
};

export default AuthLayout;