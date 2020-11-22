import {createStore, applyMiddleware} from 'redux';
import thunkMiddlware from 'redux-thunk';

const initialState = {
  favoriteAnimal: 'ducks',
  request: [],
};
// console.log(initialState.requst,'ss')

///reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET INCOME':
      return {...state, request: action.value};
    default:
      return state;
  }
};

// ///action
// const setGetIncome =(params)=>{
// return{
//     type :'GET INCOME',
//     value:params
// }
// }
// const watchData =()=>{
//     return function(dispatch){
//         fireDB.database().ref('income').on('value',function(snapshot){
//             var data = snapshot.val()

//             console.log(data,'data')
//         })
//     }
// }

const store = createStore(reducer, applyMiddleware(thunkMiddlware));
export * from './action';
export {store};
