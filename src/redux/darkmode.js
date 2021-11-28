const initialState = { isDarkMode: false };

const DARK_MODE = 'toggle/DARKTHEME';

export const toggleDarkTheme = () => ({ type: DARK_MODE });

export default function darkModeReducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}
