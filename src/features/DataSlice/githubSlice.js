import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "portfolioList",
  initialState: {
    portfolioList: [],
    ifLoading: "",
    lightMode: true,
    polishMode: true,
    isBodyOverflowHidden: false,
    routeName: "design",
  },
  reducers: {
    fetchGithubData: (state) => {
      state.ifLoading = "loading";
 
    },
    setPortfolioList: (state, { payload: data }) => {
      state.portfolioList = data;
      state.ifLoading = "success";
      
    },
    setError: (state) => {
      state.ifLoading = "error";
    },
    changeTheme: (state) => {
      //  state.lightMode = !state.lightMode;
    },
     changeTheme2: (state) => {
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
  },
});

export const {
  fetchGithubData,
  setPortfolioList,
  setError,
  changeTheme,
    changeTheme2,
  changeFlag,
  toggleBodyOverflow,
  toggleBodyOverflow2,
  setWeb,
  setDesign
} = githubSlice.actions;

export const selectPortfolioList = (state) => state.portfolioList.portfolioList;
export const selectLoadingState = (state) => state.portfolioList.ifLoading;
export const selectIsLightMode = (state) => state.portfolioList.lightMode;
export const selectIsPolishMode = (state) => state.portfolioList.polishMode;
export const selectIsBodyOverflowHidden = (state) => state.portfolioList.isBodyOverflowHidden;
export const selectWeb = (state) => state.portfolioList.routeName;
export const selectDesign = (state) => state.portfolioList.routeName;

export default githubSlice.reducer;
