import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Nav } from "@/app/interfaces";

interface navState {
  nav: Nav[]
  navSelected?: Nav | null
  isOpen: boolean
}

const initialState: navState = {
  nav: [
    {
      id: 'about',
      name: 'About'
    },
    {
      id: 'projects',
      name: 'Projects'
    },
    {
      id: 'contact',
      name: 'Contact'
    }
  ],
  navSelected: null,
  isOpen: false
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    selectNav: (state, action: PayloadAction<Nav>) => {
      console.log(action.payload);

    },
    toggleNav: (state, action: PayloadAction<boolean>) => {
      console.log({ state, action });
      state.isOpen = action.payload
    }
  }
})

export const { selectNav, toggleNav } = navSlice.actions
export default navSlice.reducer;