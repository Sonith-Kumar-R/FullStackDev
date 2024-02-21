import { legacy_createStore as createStore } from 'redux'
import reducers from "./index copy";
//This createStore takes couple of 'Arguments'
const store = createStore(
  reducers,
  {},//Empty state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //this is to see the REDUX_DEVTOOLS_EXTENSION in the Browser.
);

export default store;