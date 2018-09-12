const SET_INITIAL_SUBMISSIONS = (state, value) => {
  state.submissions = value;
};

const SET_SUBMISSION = (state, value) => {
  let jollofType = value.jollof.split(" ")[0];
  let cloneSubmissions = Object.assign({}, state.submissions);
  cloneSubmissions[value.jollof.split(" ")[0]] += 1;
  state.submissions = Object.assign({}, state.submissions, cloneSubmissions);
};

export default {
  SET_INITIAL_SUBMISSIONS,
  SET_SUBMISSION
};
