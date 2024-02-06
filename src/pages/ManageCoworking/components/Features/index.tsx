import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextField from "components/UI/TextField";
import { GeneralSchema, generalSchema } from "helpers/validations";
import { useManageContext } from "../../context";

const Features = () => {
  const { setData, setCurrentStep } = useManageContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GeneralSchema>({});

  const onSubmit = (data: GeneralSchema) => {
    setData((prevState) => ({ ...prevState, general: data }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, padding: 40 }}
    >
      <h1>Features</h1>

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

      {/* <Controller
        control={control}
        render={({ field }) => (
          <TextField label="Price" type="number" {...field} />
        )}
        name="price"
      />

      <Controller
        control={control}
        render={({ field }) => <TextField label="Tag" {...field} />}
        name="tag"
      /> */}

      <br />

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

export default Features;
