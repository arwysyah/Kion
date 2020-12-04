import {
  GET_INCOME,
  GET_SIGNED_IN,
  GET_USER_BY_ID,
  GET_POSTING_BY_ID,
  GET_POST,
  GET_ALL_USERS,
  GET_OTHER_USERS,
  GET_OTHER_USER_POST,
} from './SringType';
const initialState = {
  request: [],
  isSignIn: false,
  userByID: [],
  postBYID: [],
  posts: [],
  allUsers: [],
  otherUser: [],
  otherUserPost:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCOME:
      return {...state, request: action.value};
    case GET_SIGNED_IN:
      return {...state, isSignIn: action.value};
    case GET_USER_BY_ID:
      return {...state, userByID: action.value};
    case GET_POSTING_BY_ID:
      return {...state, postBYID: action.value};
    case GET_POST:
      return {
        ...state,
        posts: action.value,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.value,
      };
    case GET_OTHER_USERS:
      return {
        ...state,
        otherUser: action.value,
      };
      case GET_OTHER_USER_POST:
        return {
          ...state,
          otherUserPost: action.value,
        };
    default:
      return state;
  }
};

export {reducer};
