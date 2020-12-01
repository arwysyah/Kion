import {GET_INCOME,GET_SIGNED_IN, GET_USER_BY_ID} from './SringType'
const initialState = {
  request: [],
  isSignIn:false,
  userByID:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCOME:
      return {...state, request: action.value};
      case GET_SIGNED_IN:
      return{...state,isSignIn:action.value}
      case GET_USER_BY_ID:
      return {...state,userByID:action.value}
    default:
      return state;
  }
};


export {reducer};
