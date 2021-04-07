/* eslint-disable no-case-declarations */
import actions from './actions';

const initialState = {
  status: 'Configurado Correctamente',
};

const HomePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.updateStatus.INIT_TYPE: {
      return {
        ...state,
        status: payload.text,
      };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
};

export default HomePage;
