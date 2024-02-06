import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import TextField from "components/UI/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { GeneralSchema, generalSchema } from "helpers/validations";
import TextArea from "components/UI/TextArea";
import { useManageContext } from "../../context";
import { Steps } from "types";

const General = () => {
  const { setData, setCurrentStep } = useManageContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      phones: [{}],
    },
  });

  const onSubmit = (data: GeneralSchema) => {
    setData((prevState) => ({ ...prevState, general: data }));
    setCurrentStep(Steps.LANGUAGES);
  };

  const { fields, append } = useFieldArray({
    control: control,
    name: "phones" as never,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, padding: 40 }}
    >
      <h1>General Info</h1>

      <Controller
        control={control}
        render={({
          field: { value, onChange, ...inputProps },
          fieldState: { error },
        }) => {
          return (
            <TextField
              label={"Enter name"}
              error={error?.message}
              value={value}
              onChange={({ target: { value } }) => {
                let newValue =
                  value.charAt(0).toUpperCase() +
                  value.substring(1, value.length);
                onChange(newValue);
              }}
              {...inputProps}
            />
          );
        }}
        name="name"
      />

      <TextArea
        label="Description"
        {...register("description")}
        error={errors.description?.message}
      />

      {fields.map((f, index) => (
        <TextField
          label={`Enter phone`}
          key={f.id}
          {...register(`phones.${index}.value`)}
        />
      ))}
      <button
        style={{ padding: 0, color: `var(--color-primary)`, marginBottom: 10 }}
        onClick={() => append({ value: "" })}
        type="button"
      >
        Add additional phone number
      </button>
      <br />

      <TextField label={`Enter address`} {...register("address")} />

      <button
        style={{
          padding: 20,
          marginTop: 10,
          width: 200,
          borderRadius: 8,
          color: "white",
          backgroundColor: `var(--color-primary)`,
          marginBottom: 10,
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default General;
