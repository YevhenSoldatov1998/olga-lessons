import React from 'react';
import {Outlet} from "react-router-dom";
import classNames from 'classnames/bind';
import s from './index.module.scss';

const cx = classNames.bind(s);

const AuthLayout = () => {
  return (
    <section className={cx('Component')}>
      <div className={cx("Container")}>
        <Outlet/>
      </div>
    </section>
  );
};

export default AuthLayout;