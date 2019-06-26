import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { projectReducer } from './reducers/projectReducer';

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { firebase } from "../firebase/firebase";

const rrfConfig = {
	userProfile: 'users',
}

const store = createStore(combineReducers({
    projects: projectReducer,
    firebase: firebaseReducer
}),
    compose(
        applyMiddleware(thunk),
        reactReduxFirebase(firebase, rrfConfig)
    )
);

export default store;




//

// const store = compose(
// 	reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
// 	// reduxFirestore(firebase) // <- needed if using firestore
// )(createStore(rootReducer, applyMiddleware(thunk)))
 
// // Create store with reducers and initial state
 
