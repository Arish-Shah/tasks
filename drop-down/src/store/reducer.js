import data from '../data/userFilters.json';

export const initialState = {
  defaultOptions: data,
  users: [],
  disabledAdd: true
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'DISABLE_ADD_USER_BUTTON':
      return {
        ...state,
        disableAddUserButton: true
      };

    case 'ENABLE_ADD_USER_BUTTON':
      return {
        ...state,
        disableAddUserButton: false
      };

    case 'ADD_USER': {
      const updatedUsers = [...state.users];
      updatedUsers.push(action.user);

      return {
        ...state,
        users: updatedUsers
      };
    }

    default:
      return state;
  }
}
