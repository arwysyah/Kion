
const initialState = {
  favoriteAnimal: 'ducks',
  request: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET INCOME':
      return {...state, request: action.value};
    default:
      return state;
  }
};


export {reducer};
