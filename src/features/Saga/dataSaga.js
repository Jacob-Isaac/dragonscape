import { call, delay, put, takeLatest, select, throttle} from "redux-saga/effects";
import { fetchGithubData, setdata, setError, changeTheme, changeThemeAfterDelay, selectIsLightMode } from "../DataSlice/dataSlice";
import { getData } from "../GetData/getData";
import { saveThemeInLocalStorage, getThemeFromLocalStorage } from "./localStorage";


export function* fetchGithubDataWorker() {
  try {
    yield delay(1000);
    const data = yield call(getData);
    yield put(setdata(data));
  } catch (error) {
    yield put(setError());
  }
}
export function* changeThemeWorker() {
  try {
    yield put(changeThemeAfterDelay());
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

export function* dataSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
  yield throttle(1100, changeTheme.type, changeThemeWorker);
  yield takeLatest(changeThemeAfterDelay.type, saveThemeInLocalStorageWorker);
}








