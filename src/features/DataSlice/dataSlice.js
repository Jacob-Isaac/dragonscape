import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "../Saga/localStorage";


const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    ifLoading: "",
    lightMode: getThemeFromLocalStorage(),
    polishMode: true,
    isBodyOverflowHidden: false,
    routeName: "design",
  },
  reducers: {
    fetchGithubData: (state) => {
      state.ifLoading = "loading";
    },
    setdata: (state, { payload: data }) => {
      state.data = data;
      state.ifLoading = "success";
    },
    setError: (state) => {
      state.ifLoading = "error";
    },
    changeTheme: (state) => {
      //state.lightMode = !state.lightMode;
    },
     changeThemeAfterDelay: (state) => {
       state.lightMode = !state.lightMode;

    },
    changeFlag: (state) => {
      state.polishMode = !state.polishMode;
    },
    toggleBodyOverflow: (state) => {
      state.isBodyOverflowHidden = !state.isBodyOverflowHidden;
    },
    toggleBodyOverflow2: (state) => {
      state.isBodyOverflowHidden = false;
    },
    setWeb: (state) => {
      state.routeName = "web";
    },
    setDesign: (state) => {
      state.routeName = "design";
    },
    timeUpdate: (state) => {
      console.log(state.isNoon);
    },
    timeUpdate2: (state, { payload: isDayTime }) => {
      state.isNoon = isDayTime;
      console.log(isDayTime);
      console.log(state.isNoon);
    },
  },
});

export const {
  fetchGithubData,
  setdata,
  setError,
  changeTheme,
    changeThemeAfterDelay,
  changeFlag,
  toggleBodyOverflow,
  toggleBodyOverflow2,
  setWeb,
  setDesign,
  timeUpdate,
  timeUpdate2
} = dataSlice.actions;

export const selectdata = (state) => state.data.data;
export const selectLoadingState = (state) => state.data.ifLoading;
export const selectIsLightMode = (state) => state.data.lightMode;
export const selectIsPolishMode = (state) => state.data.polishMode;
export const selectIsBodyOverflowHidden = (state) => state.data.isBodyOverflowHidden;
export const selectWeb = (state) => state.data.routeName;
export const selectDesign = (state) => state.data.routeName;
export const selectIsNoonMode = (state) => state.data.isNoon;

export default dataSlice.reducer;
