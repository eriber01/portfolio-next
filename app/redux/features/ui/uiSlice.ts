import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface uiState {
  isOpenTech: boolean
}

const INITIAL_STATE: uiState = {
  isOpenTech: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_STATE,
  reducers: {
    toggleModalTech: (state, actions: PayloadAction<boolean>) => {
      state.isOpenTech = actions.payload
    }
  }
})

export const { toggleModalTech } = uiSlice.actions

export default uiSlice.reducer