//Redux

const redux = require("redux");
const createStore = redux.createStore;
//Action
const BUY_CAKE = "BUY_CAKE";

//Action is an object with type key
//Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  };
}

//Initial State
const initialState = {
  numOfCake: 10
};

//(previousState, action) => newState
//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1
      };
    default:
      return state;
  }
};

//Store
const store = createStore(reducer);

console.log("Initial State", store.getState());

//Subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

//Dispatch an action to reducer by passing action creator
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
