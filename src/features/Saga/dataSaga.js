import { call, delay, put, takeLatest, select, throttle, takeEvery} from "redux-saga/effects";
import { fetchGithubData, setdata, setError, changeThemeAfterDelay, selectIsLightMode, timeUpdate } from "../DataSlice/dataSlice";
import { getData } from "../GetData/getData";
import { saveThemeInLocalStorage} from "./localStorage";

const getCurrentHour = () => {
  return new Date().getHours();
};

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

function* setBackgroundWorker() {
  const currentHour = yield call(getCurrentHour);
  const isDayTime = currentHour >= 10 && currentHour < 19;
  yield put(timeUpdate(isDayTime));
}

export function* dataSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
  yield throttle(1100, "CHANGE_THEME", changeThemeWorker);
  yield takeLatest(changeThemeAfterDelay.type, saveThemeInLocalStorageWorker);
  yield takeEvery("TIME_UPDATE", setBackgroundWorker);
}








