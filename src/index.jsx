import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/lib/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux/globalReducer";
import saga from "./redux/globalSaga";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(persistReducer(persistConfig, reducer), composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<></>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
