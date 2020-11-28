///action
import fireDB from '../../config/configs';

export const setGetIncome = (requst) => {
//   console.log(params, 'paras');
  return {
    type: 'GET INCOME',
    value: requst,
  };
};

export const getSignedIN=(isSignedIn)=>{
  return{
    type:'GET SIGNED IN',
    value:isSignedIn
  }
}

// export const dispatchSignedIn = async () => {
//   return async function(dispatch){
//     const isSignedIn = await GoogleSignin.isSignedIn();
//  dispatch(getSignedIN(isSignedIn))
//   }

// };
export const watchData = () => {
  return function (dispatch) {
    fireDB
      .database()
      .ref('income')
      .on('value', function (snapshot) {
        var data = snapshot.val() !== null ? Object.values(snapshot.val()) : '';
        // console.log(data,'d')
        dispatch(setGetIncome(data));
      });
  };
};
