///action
import fireDB from '../../config/configs';
import {GET_INCOME,GET_SIGNED_IN,GET_USER_BY_ID} from'./SringType'

export const SET_GET_INCOME = (requst) => {
//   console.log(params, 'paras');
  return {
    type: GET_INCOME,
    value: requst,
  };
};

export const GETSIGNED_IN=(isSignedIn)=>{
  return{
    type:GET_SIGNED_IN,
    value:isSignedIn
  }
}

// export const dispatchSignedIn = async () => {
//   return async function(dispatch){
//     const isSignedIn = await GoogleSignin.isSignedIn();
//  dispatch(getSignedIN(isSignedIn))
//   }

// };

export const SET_USER_BY_ID=(data)=>{
return{
  type:GET_USER_BY_ID,
  value:data
}
}
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

export const GET_USER_BYID=(id)=>{
  return function(dispatch){
    fireDB.database().ref(`users/${id}`)
    .on('value',function(snapshot){
    let data = snapshot.val() !== null ? snapshot.val():''
    dispatch(SET_USER_BY_ID(data));
    })
  }
}

