import React, { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

const DispatchContext = createContext(null);
const StateContext = createContext(null);

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const useDispatch = () => useContext(DispatchContext);
export const useSelector = fn => {
  const selector = useContext(StateContext);
  return fn(selector);
};
