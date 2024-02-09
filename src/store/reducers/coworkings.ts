import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {CoworkingData} from "../../types";

export interface CoworkingsState {
  coworkings: CoworkingData[]
}

const initialState: CoworkingsState = {
  coworkings: [],
}

export const coworkingsSlice = createSlice({
  name: 'coworkingsSlice',
  initialState,
  reducers: {
    addNewCoworking: (state, action: PayloadAction<CoworkingData>) => {
      state.coworkings = [...state.coworkings, action.payload]
    }
    // addNewCoworking(coworking)
  },
})

// Action creators are generated for each case reducer function
export const {addNewCoworking} = coworkingsSlice.actions

export default coworkingsSlice.reducer