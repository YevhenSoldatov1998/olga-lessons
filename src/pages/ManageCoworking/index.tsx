import React, {useState} from 'react';
import General from "./components/General";
import Languages from "./components/Languages";
import Features from "./components/Features";
import {ManageContext} from "./context";
import {CoworkingData, FeaturesForm, GeneralForm, LanguagesForm, Steps} from "../../types";


const steps = [Steps.GENERAL, Steps.LANGUAGES, Steps.FEATURES]

const initialValue: CoworkingData = {
  general: null,
  languages: null,
  features: null
}
const ManageCoworking = () => {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.GENERAL)
  const [data, setData] = useState<CoworkingData>(initialValue)


  return (
    <div>

      <nav>
        {steps.map(s => <button
          style={{color: currentStep === s ? "green" : "black"}}
          onClick={() => setCurrentStep(s)}>{s}</button>)}
      </nav>

      <ManageContext.Provider value={{currentStep, data, setData}}>
        {currentStep === Steps.GENERAL && <General/>}
        {currentStep === Steps.LANGUAGES && <Languages/>}
        {currentStep === Steps.FEATURES && <Features/>}
      </ManageContext.Provider>
    </div>
  );
};

export default ManageCoworking;