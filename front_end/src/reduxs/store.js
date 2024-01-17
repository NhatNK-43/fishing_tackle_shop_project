const initStore = {};
const thunkMiddleware = [thunk];
export const store = createStore(rootReducer, initStore, applyMiddleware(...thunkMiddleware));