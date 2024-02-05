import React, {ChangeEvent, FC} from 'react';
import {Typography} from "components/Typography";
import {ColorEnum} from "helpers/types";
import s from './index.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(s);

type TextFieldProps = {
  value?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  type?: 'text' | 'password',
  name: string,
  label?: string
}

const TextField: FC<TextFieldProps> = ({error, type = 'text', label, ...props}) => {
  return (
    <div className='flex flex-col'>
      {label ? <label htmlFor={props.name}>{label}</label> : null}
      <input
        id={props.name}
        className={cx('TextField', {
          Error: error
        })}
        type={type}
        {...props}
      />
      {error && <Typography className='-mt-2' color={ColorEnum.red}>{error}</Typography>}
    </div>
  );
};

export default TextField;

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