import React, {ChangeEvent, forwardRef, ForwardRefRenderFunction} from 'react';
import {Typography} from "components/Typography";
import {ColorEnum} from "helpers/types";
import s from './index.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(s);

type TextAreaProps = {
  value?: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  placeholder?: string
  name: string,
  label?: string
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> =
  ({
     error,
     label,
     ...props
   }, ref) => {
    return (
      <div className='flex flex-col'>
        {label ? <label htmlFor={props.name}>{label}</label> : null}
        <textarea
          ref={ref}
          id={props.name}
          className={cx('TextArea', {
            Error: error
          })}
          {...props}
        />
        {error && <Typography className='mt-1 mb-2' color={ColorEnum.red}>{error}</Typography>}
      </div>
    );
  };

export default forwardRef(TextArea);

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