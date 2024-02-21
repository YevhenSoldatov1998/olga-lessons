import React from "react";
import {FormProvider, useFieldArray, useForm} from "react-hook-form";
import {FeaturesForm} from "types";
import {Typography} from "../../../../components/modules";
import Divider from "components/UI/Divider";
import {ColorEnum, FontWeight, TypographyVariant} from "helpers/types";
import TextField from "components/UI/TextField";
import s from './index.module.scss'
import Tags from "./Tags";
import {useManageContext} from "../../context";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/UI/Button";
import {useNavigate} from "react-router-dom";
import {useModal} from "../../../../helpers/hooks/useModal";

const initialForm: FeaturesForm = {
  features: [{name: 'Coffe', price: 1, tags: [{value: 'нескафе'}]}],

}

function Features() {
  const navigate = useNavigate()

  const {isOpen, close, open} = useModal()
  const {handleSaveCoworking, setData} = useManageContext()
  const methods = useForm<FeaturesForm>({
    defaultValues: initialForm
  });
  const {fields, append} = useFieldArray({control: methods.control, name: 'features'})
  const handleModalConfirm = () => {
    close()
    // navigate('/')
  }
  const onSubmit = (data: any) => {
    setData(prevState => ({...prevState, features: data.features}))
    handleSaveCoworking()
  };

  return (
    <>
      <button onClick={open}>Open modal</button>


      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{maxWidth: 500, padding: 40}}
        >
          <Typography variant={TypographyVariant.h34} weight={FontWeight.Bold}
                      color={ColorEnum.grayscale_c2}>Features</Typography>
          <Divider className='my-4'/>

          {fields?.map((feature, index) => (
            <div key={feature?.id}>
              <Typography
                variant={TypographyVariant.h18}
                color={ColorEnum.blue}
                weight={FontWeight.Medium}
                className='mb-4'
              >Feature {index + 1}</Typography>

              <div className={s.MainInfo}>
                <TextField
                  error={methods.formState.errors.features?.[index]?.name?.message}
                  label={'Name *'}
                  type="text"
                  {...methods.register(`features.${index}.name`, {
                    required: {
                      value: true,
                      message: 'Field is required'
                    }
                  })}
                />
                <TextField
                  error={methods.formState.errors.features?.[index]?.price?.message}
                  label={'Price'}
                  type="number"
                  {...methods.register(`features.${index}.price`, {
                    required: {
                      value: true,
                      message: 'Field is required'
                    }
                  })}
                />

              </div>

              <Tags path={`features.${index}.tags`}/>
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
      </FormProvider>

      {isOpen && <ConditionModal isOpen={isOpen} close={close} handleModalConfirm={handleModalConfirm}/>}
    </>
  );
}

function ConditionModal({isOpen, close, handleModalConfirm}: any) {
  return <Modal isOpen={isOpen} close={close}>
    <div className='flex flex-col justify-between'>
      <Typography className='flex-1' variant={TypographyVariant.h34}
                  weight={FontWeight.Bold}>Ваш коворкінг
        створено</Typography>
      <div className='flex justify-center mt-5'>
        <Button size={'medium'} onClick={handleModalConfirm}>На головну</Button>
      </div>

    </div>
  </Modal>
}

export default Features;
