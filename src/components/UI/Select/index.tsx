import React, {FC} from 'react';
import ReactSelect from 'react-select'
import {StateManagerProps} from 'react-select/dist/declarations/src/useStateManager';
import './index.scss'


interface SelectProps extends StateManagerProps {
  label: string,
  classNamesComponent?: string
}

const Select: FC<SelectProps> = ({label, classNamesComponent, ...reactSelectProps}) => {
  return (
    <div  className={classNamesComponent || ''}>
      {label ? <label>{label}</label> : null}
      <ReactSelect
        classNamePrefix="select"
        {...reactSelectProps}/>
    </div>
  );
};

export default Select;