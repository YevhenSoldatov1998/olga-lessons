import React, {FC} from 'react';
import {HobbyOption, UserType} from "pages/Home";
import {useForm} from "react-hook-form";

import TextField from "components/UI/TextField";
import Button from "components/UI/Button";
import Select from 'components/UI/Select'

import s from './index.module.scss'
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import classNames from 'classnames/bind';


const cx = classNames.bind(s)

export enum FormType {
  Create = 'create',
  Edit = 'edit'
}

type UserFormProps = {
  type: FormType,
  defaultValues?: UserType,
  onSuccess: (user: UserType) => void
}


const UserSchema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters'),
  email: z.string().email('Invalid email'),
  hobbies: z.array(
    z.object({
      label: z.string(),
      value: z.string()
    })
  )
})

const optionsHobbies = [
  {value: 'dancing', label: 'Dancing'},
  {value: 'swimming', label: 'Swimming'},
  {value: 'relax', label: 'Relax'}
] as HobbyOption[]

const initialDefaultValue: Partial<UserType> = {
  name: '',
  email: '',
  hobbies: []
}
const UserForm: FC<UserFormProps> = ({defaultValues = initialDefaultValue, onSuccess, type}) => {

  const {handleSubmit, register, formState, watch, setValue} = useForm<UserType>({
    defaultValues,
    resolver: zodResolver(UserSchema)
  })

  const onSubmit = (data: UserType) => {
    if (type === FormType.Edit && defaultValues.id) {
      data.id = defaultValues.id
    }
    onSuccess(data)
  }

  const hobbies = watch('hobbies') || []
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cx('Form')}>
      <TextField label={'Name'} {...register('name')} error={formState.errors.name?.message}/>
      <TextField label={'Email'} {...register('email')} error={formState.errors.email?.message}/>
      <Select
        label={'Hobbies'}
        isMulti
        defaultValue={hobbies}
        options={optionsHobbies}
        onChange={(newValue) => {
          if (newValue) {
            setValue('hobbies', newValue as HobbyOption[])
          }
        }}/>
      <Button type='submit' size={"medium"} className='w-full mt-4'>Save</Button>
    </form>
  );
};

export default UserForm;