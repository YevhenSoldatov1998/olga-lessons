import React, {ChangeEvent, FC} from 'react';
import {Typography} from "components/Typography";
import {ColorEnum} from "helpers/types";
import s from './index.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(s);

type TextFieldProps = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
  placeholder?: string
  type?: 'text' | 'password',
  name: string
}

const TextField: FC<TextFieldProps> = ({error, type = 'text', ...props}) => {
  return (
    <>
      <input
        className={cx('TextField', {
          Error: error
        })}
        type={type}
        {...props}
      />
      {error && <Typography className='-mt-2' color={ColorEnum.red}>{error}</Typography>}
    </>
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