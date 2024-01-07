import { createSlice } from "@reduxjs/toolkit";

const githubSlice = createSlice({
  name: "portfolioList",
  initialState: {
    portfolioList: [],
    ifLoading: "",
    lightMode: true,
    polishMode: true,
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
      state.lightMode = !state.lightMode;
    },
    changeFlag: (state) => {
      state.polishMode = !state.polishMode;
    },
  },
});

export const {
  fetchGithubData,
  setPortfolioList,
  setError,
  changeTheme,
  changeFlag,
} = githubSlice.actions;

export const selectPortfolioList = (state) => state.portfolioList.portfolioList;
export const selectLoadingState = (state) => state.portfolioList.ifLoading;
export const selectIsLightMode = (state) => state.portfolioList.lightMode;
export const selectIsPolishMode = (state) => state.portfolioList.polishMode;

export default githubSlice.reducer;
