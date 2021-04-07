import { all, call } from 'redux-saga/effects';

import homePageSagas from './containers/HomePage/store/sagas';

export default function* sagas() {
  yield all([call(homePageSagas)]);
}
