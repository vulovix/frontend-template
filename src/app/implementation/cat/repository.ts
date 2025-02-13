import { request, makeGetReq } from '@reactoso-request';
import { call, put, takeLatest, RepositoryResult } from '@repository';

import { actions } from './service';

export function* handleGetCatImage(): RepositoryResult {
  const url = '/catapi/v1/images/search';
  const catImages = yield call(request, url, makeGetReq());

  const catImage = catImages[0].url;

  yield put(actions.setCatImageUrl(catImage));
}

export default function* repository() {
  yield takeLatest(actions.getCatImage.type, handleGetCatImage);
}
