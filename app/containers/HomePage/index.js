/* eslint-disable react/button-has-type */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import messages from './messages';
import actions from './store/actions';

const HomePage = () => {
  const dispatch = useDispatch();

  const isStoreConfig = useSelector(state => state.homePageReducer.status);

  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <span>{isStoreConfig}</span>
      <br />
      <button
        onClick={() =>
          dispatch(actions.updateStatus.init('Status Actualizado'))
        }
      >
        Update Status
      </button>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
