import { createSlice } from "@reduxjs/toolkit";

export const MainAppSlider = createSlice({
  name: "MainApp",
  initialState: {
    userData: [],
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload.userdata;
    },
    deleteUserData: (state, action) => {
      state.userData = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserData, deleteUserData } = MainAppSlider.actions;

export default MainAppSlider.reducer;
