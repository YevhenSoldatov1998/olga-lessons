import React from 'react';
import {Outlet} from "react-router-dom";
import classNames from 'classnames/bind';
import s from './index.module.scss';
import Header from "components/Header";

const cx = classNames.bind(s);

const RootLayout = () => {
  return (
    <main className={cx('Component')}>
      <Header/>
      <Outlet/>
    </main>
  );
};

export default RootLayout;