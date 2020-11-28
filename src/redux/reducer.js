
const initialState = {
  favoriteAnimal: 'ducks',
  request: [],
  isSignIn:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET INCOME':
      return {...state, request: action.value};
      case 'GET SIGNED IN':
      return{...state,isSignIn:action.value}
    default:
      return state;
  }
};


export {reducer};
