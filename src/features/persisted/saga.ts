import { request, makeGetReq } from 'packages/request';
import { call, put, takeLatest, SagaResult } from 'libs/saga';

import { actions } from './slice';

export function* handleGetCatImage(): SagaResult {
  const url = '/catapi/v1/images/search';
  const catImages = yield call(request, url, makeGetReq());

  const catImage = catImages[0].url;

  yield put(actions.setCatImageUrl(catImage));
}

export default function* saga() {
  yield takeLatest(actions.getCatImage.type, handleGetCatImage);
}
