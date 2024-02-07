import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {useManageContext} from "../../context";
import {Steps} from "types";
import s from './index.module.scss'
import {languageSchema, LanguageSchema} from "helpers/validations";
import {zodResolver} from "@hookform/resolvers/zod";

function LanguageSelect() {
  const {control, handleSubmit, formState: {errors,}} = useForm<LanguageSchema>({
    resolver: zodResolver(languageSchema),
    defaultValues: {language: ""}
  });
  const {setData, setCurrentStep} = useManageContext();

  const onSubmit = (data: LanguageSchema) => {

    setData((prevState) => ({...prevState, language: data.language}));
    setCurrentStep(Steps.FEATURES);
  };
  const hasErrors = Boolean(Object.keys(errors).length)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{maxWidth: 500, padding: 40}}
    >
      <h1>Language</h1>
      <Controller
        name="language"
        control={control}
        render={({field: {onChange, ...selectProps}}) => (
          <select
            style={{
              padding: 10,
              height: 42,
              marginTop: 10,
              width: 200,
              borderRadius: 8,
            }}
            onChange={(e) => onChange(e.target.value)}
            {...selectProps}
          >
            <option value="">Choose language</option>
            <option value="украинский">Українська</option>
            <option value="английский">English</option>
            <option value="иврит">עִבְרִית</option>
          </select>
        )}
      />
      <p>{errors?.language?.message}</p>
      <br/>


      <button
        className={s.Submit}
        disabled={hasErrors}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default LanguageSelect;
