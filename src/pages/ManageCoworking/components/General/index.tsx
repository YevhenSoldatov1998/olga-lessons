import React from 'react';
import {useForm} from "react-hook-form";
import {GeneralForm} from "types";
import TextField from "components/UI/TextField";

const General = () => {
  const {register, handleSubmit} = useForm<GeneralForm>()

  const onSubmit = (data: GeneralForm) => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: 400}}>
      <h1>General Info</h1>
      <TextField label='Name'  {...register('name')}/>
    </form>
  );
};

export default General;