import { call, delay, put, takeLatest, select, throttle} from "redux-saga/effects";
import { fetchGithubData, setPortfolioList, setError, changeTheme, changeTheme2, selectIsLightMode } from "../DataSlice/githubSlice";
import { getData } from "../GetData/githubData";
import { saveThemeInLocalStorage, getThemeFromLocalStorage } from "./localStorage";


export function* fetchGithubDataWorker() {
  try {
    yield delay(1000);
    const data = yield call(getData);
    yield put(setPortfolioList(data));
  } catch (error) {
    yield put(setError());
  }
}
export function* changeThemeWorker() {
  try {
    yield put(changeTheme2());
  } catch (error) {
    yield put(setError());
  }
}

export function* saveThemeInLocalStorageWorker() {
  try {
    const lightMode = yield select(selectIsLightMode);
    yield call(saveThemeInLocalStorage, lightMode);
  } catch (error) {
    yield put(setError());
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
  yield throttle(1100, changeTheme.type, changeThemeWorker);
  yield takeLatest(changeTheme2.type, saveThemeInLocalStorageWorker);
}








