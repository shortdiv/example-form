var firebase = require("firebase");
import { db } from "./state";
import axios from "axios";

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
  return axios.post("/", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload
  });
};

export default {
  init,
  fetchSubmissions,
  postSubmission
};
