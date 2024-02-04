import React from "react";
import s from "./index.module.scss";
import classNames from "classnames/bind";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
const cx = classNames.bind(s);

type Inputs = {
  email: string;
};

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Handle sign-in logic here
    console.log(data);
  };

  return (
    <form className={cx("Form")} onSubmit={handleSubmit(onSubmit)}>
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

      <button className={cx("Submit")} type="submit">
        Sign In
      </button>
      <Link className={cx("Create")} to="/sign-up">
        <p>Still have no account?</p>
        <button>Create account</button>
      </Link>
    </form>
  );
};

export default SignInForm;
