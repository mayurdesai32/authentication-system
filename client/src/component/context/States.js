import { useReducer, useEffect } from 'react';
import Context from './Context';
import Reducers from './Reducers';
const States = (props) => {
  const initialState = false;
  const [state, dispatch] = useReducer(Reducers, initialState, () => {
    const local = localStorage.getItem('USER');
    return local ? JSON.parse(local) : [];
  });

  const login = (data) => {
    // console.log(data);
    dispatch({ type: 'USER', payload: data });
  };
  useEffect(() => {
    localStorage.setItem('USER', JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <Context.Provider
      value={{
        state,
        login,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default States;
