import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyA_LYOS0Th9bPj8NPV7e7ajhlpNF_NE7HY",
	authDomain: "react-5369f.firebaseapp.com",
	databaseURL: "https://react-5369f.firebaseio.com",
	projectId: "react-5369f",
	storageBucket: "react-5369f.appspot.com",
	messagingSenderId: "509270701621",
	appId: "1:509270701621:web:8fdeb252daa81c92"
};

firebase.initializeApp(config);


const database = firebase.database();

export { firebase, database as default };