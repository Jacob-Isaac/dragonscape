import { call, delay, put, takeLatest, take, throttle} from "redux-saga/effects";
import { fetchGithubData, setPortfolioList, setError, changeTheme, changeTheme2 } from "../DataSlice/githubSlice";
import { getData } from "../GetData/githubData";


export function* fetchGithubDataWorker() {
  try {
    yield delay(0);
    const data = yield call(getData);
    yield put(setPortfolioList(data));
  } catch (error) {
    yield put(setError());
  }
}
export function* fetchGithubDataWorker2() {
  try {
    // yield delay(0);
    yield put(changeTheme2());
  } catch (error) {
    yield put(setError());
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
  yield throttle(1100, changeTheme.type, fetchGithubDataWorker2);
}








