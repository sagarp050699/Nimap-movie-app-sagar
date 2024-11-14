
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer, // your combined reducers
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // redux-thunk is included by default
// });

// export default store;
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer, // Your combined reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // redux-thunk is included by default
});

export default store;
