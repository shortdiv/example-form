import cloneDeep from "lodash/cloneDeep";

var firebase = require("firebase");

const config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
  storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
};
firebase.initializeApp(config);
export const db = firebase.database();

const state = {
  submissions: {}
};

export const getState = () => cloneDeep(state);

export default getState();
