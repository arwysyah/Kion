///action
import fireDB from '../../config/configs';
import {
  GET_INCOME,
  GET_SIGNED_IN,
  GET_USER_BY_ID,
  GET_POSTING_BY_ID,
  GET_POST,
  GET_ALL_USERS,
  GET_OTHER_USERS,
  GET_OTHER_USER_POST
} from './SringType';

export const SET_GET_INCOME = (requst) => {
  //   console.log(params, 'paras');
  return {
    type: GET_INCOME,
    value: requst,
  };
};
export const SET_ALL_POST = (data) => {
  //   console.log(params, 'paras');
  return {
    type: GET_POST,
    value: data,
  };
};

export const GETSIGNED_IN = (isSignedIn) => {
  return {
    type: GET_SIGNED_IN,
    value: isSignedIn,
  };
};
export const SET_ALL_USERS = (data) => {
  return {
    type: GET_ALL_USERS,
    value: data,
  };
};

export const SET_USER_BY_ID = (data) => {
  return {
    type: GET_USER_BY_ID,
    value: data,
  };
};
export const SET_OTHER_USER = (data) => {
  return {
    type: GET_OTHER_USERS,
    value: data,
  };
};
export const SET_USER_POSTING_BY_ID = (data) => {
  return {
    type: GET_POSTING_BY_ID,
    value: data,
  };
};
export const SET_USER_POSTING_OTHER_USER = (data) => {
  return {
    type: GET_OTHER_USER_POST,
    value: data,
  };
};
export const WATCHDATA = () => {
  return function (dispatch) {
    fireDB
      .database()
      .ref('income')
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        // console.log(data,'d')
        dispatch(SET_GET_INCOME(data));
      });
  };
};

export const GET_USER_BYID = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`users/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? snapshot.val() : '';
        dispatch(SET_USER_BY_ID(data));
      });
  };
};
export const GET_OTHER_USER = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`users/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? snapshot.val() : '';
        dispatch(SET_OTHER_USER(data));
        // console.log('ddatat',data)

      });
  };
};

export const GET_POSTING_CURRENT_USER = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`posting/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        dispatch(SET_USER_POSTING_BY_ID(data));
      });
  };
};
export const GET_POSTING_OTHER_USER = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`posting/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        dispatch(SET_USER_POSTING_OTHER_USER(data));
      });
  };
};

export const GET_ALL_POST = () => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`posting`)
      .on('value', function (snapshot) {
        let data = snapshot.val();
        let arrayOfData = [];
        if (data) {
          for (let key in data) {
            let obj = data[key];

            let loopData = obj;
            for (let item in loopData) {
              const {
                email,
                username,
                createdAt,
                category,
                fullName,
                ids,
                text,
                title,
                uid,
                urlImage,
              } = loopData[item];
              arrayOfData.push({
                email,
                username,
                createdAt,
                category,
                fullName,
                ids,
                text,
                title,
                uid,
                urlImage,
              });
            }
          }
        }
        dispatch(SET_ALL_POST(arrayOfData));
      });
  };
};
export const WATCH_ALL_USERS = () => {
  return function (dispatch) {
    fireDB
      .database()
      .ref('users')
      .on('value', (snapshot) => {
        let data = snapshot.val() != null ? Object.values(snapshot.val()) : '';
        dispatch(SET_ALL_USERS(data));
      });
  };
};
