import { handleActions, createAction } from 'redux-actions';

const defaultState = { counter: 10 };

const EMIT_LIGHT_STRIP_UPDATE = 'EMIT_LIGHT_STRIP_UPDATE';

export const emitLightStripUpdate = createAction(EMIT_LIGHT_STRIP_UPDATE, {
  red,
  green,
  blue,
  white
});

const neoPixelReducer = handleActions(
  {
    [EMIT_LIGHT_STRIP_UPDATE]: (state, colors) => ({
      ...state,
      colors
    })
  },
  defaultState
);

export default neoPixelReducer;