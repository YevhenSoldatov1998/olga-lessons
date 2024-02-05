import {createContext, Dispatch, SetStateAction, useContext} from "react";
import {CoworkingData, Steps} from "../../../types";


type ManageContextType = {
  currentStep: Steps,
  setCurrentStep: Dispatch<SetStateAction<Steps>>,
  data: CoworkingData,
  setData: Dispatch<SetStateAction<CoworkingData>>
}
export const ManageContext = createContext<ManageContextType | null>(null)


export const useManageContext = () => {
  const context = useContext(ManageContext)
  return context as ManageContextType
}