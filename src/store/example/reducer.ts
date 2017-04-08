const initialState = {
  text: 'Example text.',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'append':
      return { ...state, text: `${state.text}${action.payload}` };

    case 'set':
      return { ...state, text: action.payload };

    case 'reset':
      return { ...initialState };

    default:
      return state;
  }
}
