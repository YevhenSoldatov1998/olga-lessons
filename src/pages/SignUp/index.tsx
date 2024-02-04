import React from "react";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const cx = classNames.bind(s);

type Inputs = {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
  };

  const password = watch("password");

  return (
    <form className={cx("Form")} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Enter your name"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && (
        <p style={{ color: "red", fontSize: "small" }}>{errors.name.message}</p>
      )}

      <input
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",

          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p style={{ color: "red", fontSize: "small" }}>
          {errors.email.message}
        </p>
      )}

      <input
        placeholder="Enter your password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        type="password"
      />
      {errors.password && (
        <p style={{ color: "red", fontSize: "small" }}>
          {errors.password.message}
        </p>
      )}

      <input
        placeholder="Repeat your password"
        {...register("repeatPassword", {
          validate: (value) => value === password || "Passwords do not match",
        })}
        type="password"
      />
      {errors.repeatPassword && (
        <p style={{ color: "red", fontSize: "small" }}>
          {errors.repeatPassword.message}
        </p>
      )}

      <button className={cx("Submit")} type="submit">
        Sign Up
      </button>
      <Link className={cx("Create")} to="/sign-in">
        <p>Just have an account?</p>
        <button>Sign in</button>
      </Link>
    </form>
  );
};

export default SignUpForm;
