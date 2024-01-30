import React, {FormEvent, useRef, useState} from 'react';
import s from './index.module.scss'

import classNames from 'classnames/bind'
import {Typography} from "components/modules";
import {ColorEnum, FontWeight, TypographyVariant} from "helpers/types";
import {Link} from "react-router-dom";

const cx = classNames.bind(s)

const initialForm: SignupForm = {
  username: '',
  password: '',
  email: '',
  repeatPassword: ''
}

const SignUp = () => {
  const [form, setForm] = useState<SignupForm>(initialForm)
  const [errors, setErrors] = useState<Partial<SignupForm> | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (form.username === '') {
      setErrors({username: 'Це поле обовʼязкове'})
    }
  }

  return (
    <form onSubmit={onSubmit} className={cx("Form")}>
      <Typography
        variant={TypographyVariant.h34}
        weight={FontWeight.Bold}
        color={ColorEnum.grayscale_c1}
        className='text-center mb-3'
      >Створити аккаунт</Typography>

      <input
        className={cx({
          Error: errors?.username
        })}
        type="text" placeholder="Імʼя користувача" defaultValue={form.username}/>
      {errors?.username && <Typography className='-mt-2' color={ColorEnum.red}>{errors?.username}</Typography>}
      <input
        className={cx({
          Error: errors?.email
        })}
        type="text" placeholder="Введіть email" defaultValue={form.email}/>
      {errors?.email && <Typography className='-mt-2' color={ColorEnum.red}>{errors?.email}</Typography>}

      <input
        className={cx({
          Error: errors?.password
        })}
        type="password" placeholder="Введіть пароль" defaultValue={form.password}/>
      {errors?.password && <Typography className='-mt-2' color={ColorEnum.red}>{errors?.password}</Typography>}

      <input
        className={cx({
          Error: errors?.repeatPassword
        })}
        type="password" placeholder="Повторіть пароль" defaultValue={form.repeatPassword}/>
      {errors?.repeatPassword &&
          <Typography className='-mt-2' color={ColorEnum.red}>{errors?.repeatPassword}</Typography>}

      <button
        disabled={Boolean(Object.keys(errors || {}))} //Boolean(['username']) => true
        className={cx("Submit")} type="submit">Створити
      </button>


      <div className='flex ml-auto items-center'>
        <Typography variant={TypographyVariant.p14} color={ColorEnum.grayscale_c4} className='mr-1'>Уже маєш
          аккаунт?</Typography>
        <Link to='/sign-in'>
          <Typography variant={TypographyVariant.p14} weight={FontWeight.Bold} color={ColorEnum.blue}>Увійти
          </Typography></Link>
      </div>
    </form>
  );
};

export default SignUp;