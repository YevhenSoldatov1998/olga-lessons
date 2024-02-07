import React from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";
import {TagType} from "types";
import TextField from "components/UI/TextField";
import s from './index.module.scss'

const Tags = ({path}: { path: string }) => {
  const {control, watch, register} = useFormContext()

  const {fields, append, remove} = useFieldArray({
    control: control,
    name: path // ... features.0.tags.0.value:
  })

  const tags = watch(path) as TagType[]

  const addNewTag = () => {
    append({value: ''} as TagType)
  }


  return (
    <>
      <div className={s.Tags}>
        {fields.map((field, index) => {
          const tag = field as TagType & { id: string }
          return (
            <div key={tag.id} className='flex items-center'>
              <TextField
                view='tag'
                {...register(`${path}.${index}.value`)}
              />
              <button className={s.BtnRemove}
                      onClick={() => remove(index)}
                      type='button'>&times;</button>
            </div>
          )
        })}
      </div>
      <button onClick={addNewTag}>Add new tag</button>
    </>
  );
};

export default Tags;