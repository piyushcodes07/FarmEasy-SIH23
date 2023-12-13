import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'



export interface locationSlice {
  city:string,
  lat:string,
  lng:string,
}

const initialState: locationSlice = {
  city:"",
  lat:"",
  lng:""
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
   
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },

    setLat:(state,action:PayloadAction<string> )=>{
        state.lat = action.payload
    },
    setLng:(state,action:PayloadAction<string>)=>{
        state.lng = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCity,setLng,setLat} = locationSlice.actions

export const selectCity = (state: RootState) => state.location.city
export const selectLat = (state: RootState) => state.location.lat
export const selectLng = (state: RootState) => state.location.lng


export default locationSlice.reducer