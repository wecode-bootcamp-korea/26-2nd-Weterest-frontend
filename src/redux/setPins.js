const initialState = { savedPins: [] };

const SET_PINS = 'SET_PINS';

export default function pinReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PINS:
      return action.savedPins;
    default:
      return state;
  }
}
