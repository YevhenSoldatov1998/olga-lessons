import React, {useState} from 'react';
import General from "./components/General";
import Languages from "./components/Languages";
import Features from "./components/Features";
import {ManageContext} from "./context";
import {CoworkingData, Steps} from "../../types";
import {useDispatch} from "react-redux";
import {addNewCoworking} from "../../store/reducers/coworkings";


const steps = [Steps.GENERAL, Steps.LANGUAGES, Steps.FEATURES]

const initialValue: CoworkingData = {
  general: {
    name: 'Daisy coworking',
    address: 'Kiev, st. Velyka Vasylkivska, 5',
    description: 'The best coworking in the city',
    phones: [{value: '+380 67 123 45 67'}],
  },
  language: 'english',
  features: {features: [{name: 'Coffe', price: 1, tags: [{value: 'нескафе'}]}]}
}
const ManageCoworking = () => {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.FEATURES)
  const [data, setData] = useState<CoworkingData>(initialValue)
  const dispatch = useDispatch()

  const handleSaveCoworking = () => {
    dispatch(addNewCoworking(data))
  }

  return (
    <div>

      <nav>
        {steps.map(s => <button
          key={s}
          style={{color: currentStep === s ? "green" : "black"}}
          onClick={() => setCurrentStep(s)}>{s}</button>)}
      </nav>

      <ManageContext.Provider value={{currentStep, data, setData, setCurrentStep, handleSaveCoworking}}>
        {currentStep === Steps.GENERAL && <General/>}
        {currentStep === Steps.LANGUAGES && <Languages/>}
        {currentStep === Steps.FEATURES && <Features/>}
      </ManageContext.Provider>
    </div>
  );
};

export default ManageCoworking;