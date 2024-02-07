import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { GeneralSchema, generalSchema } from "helpers/validations";
// import { zodResolver } from "@hookform/resolvers/zod";
// import TextArea from "components/UI/TextArea";
// import TextField from "components/UI/TextField";

function Features() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 500, padding: 40 }}
    >
      <h1>Features</h1>
      <div>
        <label>Enter name:</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Enter price:</label>
        <Controller
          name="price"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} type="number" />}
        />
      </div>
      <div>
        <label>Enter tag:</label>
        <Controller
          name="tag"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
      </div>

      {/* <TextArea
        label="Enter name"
        {...register("name")}
        error={errors.name?.message}
      /> */}

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
}

export default Features;
