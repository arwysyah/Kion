import {
  GET_INCOME,
  GET_SIGNED_IN,
  GET_USER_BY_ID,
  GET_POSTING_BY_ID,
  GET_POST,
  GET_ALL_USERS,
  GET_OTHER_USERS,
  GET_OTHER_USER_POST,
  GET_URI_PHOTO,
  GET_GALLERY_PHOTO,
  GET_GALLERY_PHOTO_OTHER_USER,
  GET_FOLLOWING_BY_ID,
  GET_FOLLOWER_BY_ID
} from './SringType';
const initialState = {
  request: [],
  isSignIn: false,
  userByID: [],
  postBYID: [],
  posts: [],
  allUsers: [],
  otherUser: [],
  otherUserPost: [],
  urlGaleryPhoto: '',
  galleryData:[],
  galleryOtherUser:[],
  following:[],
  follower:[]
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
    case GET_URI_PHOTO:
      return {
        ...state,
        urlGaleryPhoto: action.value,
      };
      case GET_GALLERY_PHOTO:
        return{
          ...state,
          galleryData:action.value
        }
        case GET_GALLERY_PHOTO_OTHER_USER:
          return{
            ...state,
            galleryOtherUser:action.value
          }
          case GET_FOLLOWING_BY_ID:
            return{
              ...state,
              following:action.value
            }
            case GET_FOLLOWER_BY_ID:
              return{
                ...state,
                follower:action.value
              }
    default:
      return state;
  }
};

export {reducer};
