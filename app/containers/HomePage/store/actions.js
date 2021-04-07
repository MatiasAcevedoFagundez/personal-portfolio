import AbstractAction from 'utils/AbstractAction';

class Action extends AbstractAction {
  _namespace = 'HomePage';
}

const updateStatus = new Action('updateStatus', {
  init: text => ({ text }),
});

const resetState = new Action('resetState', {
  init: () => ({}),
});

export default {
  resetState,
  updateStatus,
};
