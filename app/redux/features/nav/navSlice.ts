import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import { Nav } from "@/app/interfaces";

interface navState {
  nav: Nav[]
  navSelected?: Nav | null
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
  navSelected: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    selectNav: (state, action: PayloadAction<Nav>) => {
      console.log(action.payload);

    }
  }
})

export const { selectNav } = navSlice.actions
export default navSlice.reducer;