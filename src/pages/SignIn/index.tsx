import React, {FormEvent} from 'react';
import s from './index.module.scss'

import classNames from 'classnames/bind'
import {Typography} from "components/modules";
import {ColorEnum, FontWeight, TypographyVariant} from "helpers/types";
import {Link} from "react-router-dom";

const cx = classNames.bind(s)
const SignIn = () => {

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className={cx("Form")}>
      <Typography
        variant={TypographyVariant.h34}
        weight={FontWeight.Bold}
        color={ColorEnum.grayscale_c1}
        className='text-center mb-3'
      >Логін</Typography>

      <input type="text" placeholder="Enter your email" defaultValue=""/>
      <input type="password" placeholder="Enter your password" defaultValue=""/>
      <button className={cx("Submit")} type="submit">Увійти</button>


      <div className='flex ml-auto items-center'>
        <Typography variant={TypographyVariant.p14} color={ColorEnum.grayscale_c4} className='mr-1'>Не маєш
          аккаунта?</Typography>
        <Link to='/sign-up'>
          <Typography variant={TypographyVariant.p14} weight={FontWeight.Bold} color={ColorEnum.blue}>Створити
            аккаун</Typography></Link>
      </div>
    </form>
  );
};

export default SignIn;