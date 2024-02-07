import React from "react";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {FeaturesForm} from "types";


const initialForm: FeaturesForm = {
  features: [{name: 'Coffe', price: 1, tags: [{value: 'нескафе'}]}]
}

function Features() {
  const {
    handleSubmit,
    control,
    register,
    formState: {errors},
  } = useForm<FeaturesForm>({
    defaultValues: initialForm
  });
  const {fields, append} = useFieldArray({control: control, name: 'features'})

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{maxWidth: 500, padding: 40}}
    >
      <h1>Features</h1>

      {fields?.map((feature, index) => (
        <div>
          <input type="text" {...register(`features.${index}.name`)}/>
          <input type="number" {...register(`features.${index}.price`)}/>

        </div>
      ))}
      <button onClick={() => append({name: '', price: 0, tags: []})}>Add new feature</button>
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
