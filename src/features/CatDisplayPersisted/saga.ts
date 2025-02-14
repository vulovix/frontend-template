import { makeGetReq, request } from 'packages/request';

import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

export function* handleGetCatImage(): any {
  const url = '/catapi/v1/images/search';
  const catImages = yield call(request, url, makeGetReq());

  const catImage = catImages[0].url;

  yield put(actions.setCatImageUrl(catImage));
}

export default function* saga() {
  yield takeLatest(actions.getCatImage.type, handleGetCatImage);
}
