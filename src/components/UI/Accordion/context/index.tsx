import {createContext, Dispatch, SetStateAction, useContext} from "react";


export interface AccordionContextProps {
  visibleId: string | null
  setVisibleId: Dispatch<SetStateAction<string | null>>
}

export interface AccordionItemContextProps {
  id: string
}

export const AccordionContext = createContext<AccordionContextProps | null>(null)
export const AccordionItemContext = createContext<string | null>(null)

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  return context
}
export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext)
  return context
}