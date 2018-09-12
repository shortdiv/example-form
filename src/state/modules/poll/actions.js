var firebase = require("firebase");
import { db } from "./state";

const init = ({ commit }) => {
  console.log("here");
  db.ref("submissions").on(
    "value",
    snapshot => {
      commit("SET_INITIAL_SUBMISSIONS", snapshot.val());
    },
    err => {
      console.log(err);
    }
  );
};

const fetchSubmissions = ({ commit }, payload) => {
  return db
    .ref("/submissions/")
    .once("value")
    .then(snapshot => {
      commit("SET_INITIAL_SUBMISSIONS", snapshot.val());
    });
};

const postSubmission = ({ commit }, payload) => {
  // post to firebase handled in functions //
  return new Promise((resolve, reject) => {
    if (payload) {
      var newPostKey = db
        .ref()
        .child(`submissions`)
        .push().key;
      db.ref(`submissions/${newPostKey}`).set({
        body: {
          human_fields: {
            Jollof: payload.jollof
          }
        }
      });
      resolve(payload);
    }
    reject();
  });
};

export default {
  init,
  fetchSubmissions,
  postSubmission
};
