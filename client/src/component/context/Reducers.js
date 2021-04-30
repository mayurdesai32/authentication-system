const Reducers = (state, action) => {
  if (action.type === 'USER') {
    return action.payload;
  } else {
    return state;
  }
};

export default Reducers;
