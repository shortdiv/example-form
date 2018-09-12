var firebase = require("firebase");
import state from "./state";

const initDB = ({ commit }) => {
  const config = {
    apiKey: `${process.env.VUE_APP_API_KEY}`,
    authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
    storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
    messagingSenderId: `${process.env.VUE_APP_SENDER_ID}`
  };
  firebase.initializeApp(config);
  const db = firebase.database();
  commit("SET_DB", db);
};

const fetchSubmissions = ({ commit }, payload) => {
  state.db
    .ref("/submissions/")
    .once("value")
    .then(snapshot => {
      const snapshots = snapshot.val();
      let data = [];
      for (var item in snapshots) {
        data.push({
          jollof:
            snapshots[item].body.human_fields[
              Object.keys(snapshots[item].body.human_fields)
            ]
        });
      }
      commit("SET_INITIAL_SUBMISSIONS", data);
    });
};

const postSubmission = ({ commit }, payload) => {
  // post to firebase handled in functions //
  return new Promise((resolve, reject) => {
    if (payload) {
      var newPostKey = state.db
        .ref()
        .child(`submissions`)
        .push().key;
      state.db.ref(`submissions/${newPostKey}`).set({
        body: {
          human_fields: {
            Jollof: payload.jollof
          }
        }
      });
      commit("SET_SUBMISSION", payload);
      resolve(payload);
    }
    reject();
  });
};

export default {
  initDB,
  fetchSubmissions,
  postSubmission
};
