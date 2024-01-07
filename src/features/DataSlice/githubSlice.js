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
      console.log(state.ifLoading);
    },
    setPortfolioList: (state, { payload: data }) => {
      state.portfolioList = data;
      state.ifLoading = "success";
      console.log(state.portfolioList);
    },
    setError: (state) => {
      state.ifLoading = "error";
    },
    changeTheme: (state) => {
      state.lightMode = !state.lightMode;
      console.log(state.lightMode);
    },
    changeFlag: (state) => {
      state.polishMode = !state.polishMode;
      console.log(state.polishMode);
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
