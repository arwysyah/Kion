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
  GET_OTHER_USER_POST,
  GET_URI_PHOTO,
  GET_GALLERY_PHOTO,
  GET_GALLERY_PHOTO_OTHER_USER,
  GET_FOLLOWER_BY_ID,
  GET_FOLLOWING_BY_ID,
  GET_MAINTANACE
} from './SringType';

export const SET_GET_INCOME = (requst) => {
  //   console.log(params, 'paras');
  return {
    type: GET_INCOME,
    value: requst,
  };
};
export const SET_MAINTANCE = (data) => {
  //   console.log(params, 'paras');
  return {
    type: GET_MAINTANACE,
    value: data,
  };
};
export const SET_ALL_POST = (data) => {
  //   console.log(params, 'paras');
  return {
    type: GET_POST,
    value: data,
  };
};
export const SET_GALLERY_PHOTO=(data)=>{
  return{
    type:GET_URI_PHOTO,
    value:data
  }
}

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
export const SET_FETCH_PHOTO=(data)=>{
  return{
    type:GET_GALLERY_PHOTO,
    value:data
  }
}
export const SET_FETCH_PHOTO_OTHER_USER=(data)=>{
  return{
    type:GET_GALLERY_PHOTO_OTHER_USER,
    value:data
  }
}
export const SET_FOLLOWING = (guest) => {
  //   console.log(params, 'paras');
  return {
    type: GET_FOLLOWING_BY_ID,
    value: guest,
  };
};
export const SET_FOLLOWER = (guest) => {
  //   console.log(params, 'paras');
  return {
    type: GET_FOLLOWER_BY_ID,
    value: guest,
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
export const GET_GALLERY_BY_ID = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`gallery/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        
        dispatch(SET_FETCH_PHOTO(data))
          
       
      });
  };
};
export const GET_GALLERY_OTHER_BY_ID = (id) => {
  return function (dispatch) {
    fireDB
      .database()
      .ref(`gallery/${id}`)
      .on('value', function (snapshot) {
        let data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        
        dispatch(SET_FETCH_PHOTO_OTHER_USER(data))
          
       
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
export const WATCH_URI =(urlPhoto)=>{
  return (dispatch=>{
    dispatch(urlPhoto)
  })
}
export const WATCH_FOLLOWING=(id)=>{
return function(dispatch){
  fireDB.database()
  .ref(`follow/${id}`)
  .on('value',(snapshot)=>{
  let data = snapshot.val() !== null ? Object.values(snapshot.val()):''
  dispatch(SET_FOLLOWING(data))
  })
}
}
export const WATCH_FOLLOWER=(id)=>{
  return (dispatch=>{
    fireDB.database()
    .ref(`follow/${id}`)
    .on('value',(snapshot)=>{
      // console.log(snapshot.val())
    })
  })
}
export const GET_MAINTANCE_VALUE=()=>{
  return function (dispatch){
    fireDB.database()
    .ref(`maintanace/`)
    .on('value',(snapshot)=>{
     let data = snapshot.val()['-MNrrx5LGEH0axMVlK1A']
      dispatch(SET_MAINTANCE(data.maintenance))
    })
  }

}
