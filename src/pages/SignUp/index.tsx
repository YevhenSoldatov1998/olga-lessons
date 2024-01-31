import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import s from './index.module.scss'

import classNames from 'classnames/bind'
import {Typography} from "components/modules";
import {ColorEnum, FontWeight, TypographyVariant} from "helpers/types";
import {Link, useNavigate} from "react-router-dom";
import {SignupForm} from "../../types";
import TextField from "../../components/UI/TextField";
import {de} from "@faker-js/faker";

const cx = classNames.bind(s)
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const initialForm: SignupForm = {
  username: '',
  password: '',
  email: '',
  repeatPassword: ''
}

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState<SignupForm>(initialForm)
  const [errors, setErrors] = useState<Partial<SignupForm> | null>(null)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    let isError = false
    event.preventDefault()

    if (form.username === '') {
      setErrors(prevState => ({...prevState, username: 'Це поле обовʼязкове'}))
      isError = true
    }
    if (!form.email.match(emailRegex)) {
      setErrors(prevState => ({...prevState, email: 'Введіть валідний email'}))
      isError = true
    }
    if (form.password === '') {
      setErrors(prevState => ({...prevState, password: 'Введіть пароль'}))
      isError = true
    }
    if (form.password && !form.repeatPassword) {
      setErrors(prevState => ({...prevState, repeatPassword: 'Введіть повторний пароль'}))
      isError = true
    }
    if (form.password && form.repeatPassword && form.password !== form.repeatPassword) {
      setErrors(prevState => ({...prevState, repeatPassword: 'Паролі не співпадають'}))
      isError = true
    }
    if (isError) {
      return;
    }

    const newUser = {
      username: form.username,
      email: form.email,
      id: Date.now().toString()
    }

    const users = JSON.parse(localStorage.getItem('users') || "[]") || [];
    users.push(newUser)

    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('isAuth', JSON.stringify(true))
    navigate('/')

  }
  const resetForm = () => {
    setErrors(null)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name
    setForm({
      ...form,
      [name]: value
    })
    resetForm()
  }

  return (
    <form onSubmit={onSubmit} className={cx("Form")}>
      <Typography
        variant={TypographyVariant.h34}
        weight={FontWeight.Bold}
        color={ColorEnum.grayscale_c1}
        className='text-center mb-3'
      >Створити аккаунт</Typography>

      <TextField
        name="username"
        value={form.username}
        placeholder='Введіть імʼя'
        onChange={handleChange}
        error={errors?.username}
      />
      <TextField
        name="email"
        value={form.email}
        placeholder='Введіть email'
        onChange={handleChange}
        error={errors?.email}
      />
      <TextField
        name="password"
        value={form.password}
        placeholder='Введіть пароль'
        onChange={handleChange}
        error={errors?.password}
        type="password"
      />
      <TextField
        name="repeatPassword"
        value={form.repeatPassword}
        placeholder='Повторіть пароль'
        onChange={handleChange}
        error={errors?.repeatPassword}
        type="password"
      />


      <button
        // disabled={Boolean(errors)}

        //Boolean(['username']) => true
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