//Redux

const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

//Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//Action is an object with type key
//Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "cakes"
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "ice creams"
  };
}

//Initial State
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 19
// };

const initialCakeState = {
  numOfCakes: 10
};

const initialIcecreamState = {
  numOfIceCreams: 19
};

//(previousState, action) => newState
//Reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

//combineReducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
});

//Store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State", store.getState());

//Subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

//Dispatch an action to reducer by passing action creator
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
