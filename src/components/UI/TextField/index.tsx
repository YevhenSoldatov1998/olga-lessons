import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";
import {Typography} from "components/Typography";
import {ColorEnum} from "helpers/types";
import s from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

type TextFieldProps = {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  name: string;
  label?: string;
  className?: string
  classNameInput?: string,
  view?: 'default' | 'tag'
};

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {error, type = "text", label, className, classNameInput, view = 'default', ...props},
  ref
) => {
  return (
    <div className={`flex flex-col ${className || ''} ${cx('Component')}`}>
      {label ? <label htmlFor={props.name}>{label}</label> : null}
      <input
        ref={ref}
        id={props.name}
        className={cx("TextField", classNameInput || '', {
          Error: error,
          TextFieldTag: view === 'tag'
        })}

        type={type}
        {...props}
      />
      {error && (
        <Typography className="mt-1 mb-2" color={ColorEnum.red}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default forwardRef(TextField);

//
// const TextField: FC<TextFieldProps> = ({onChange, error, value, placeholder, type = 'text'}) => {
//   return (
//     <>
//       <input
//         className={cx('TextField', {
//           Error: error
//         })}
//         onChange={onChange}
//         type={type}
//         placeholder={placeholder}
//         value={value}
//       />
//       {error && <Typography className='-mt-2' color={ColorEnum.red}>{error}</Typography>}
//     </>
//   );
// };
//
// export default TextField;
