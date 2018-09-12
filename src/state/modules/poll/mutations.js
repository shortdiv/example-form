const SET_DB = (state, value) => {
  state.db = value;
};

const SET_INITIAL_SUBMISSIONS = (state, value) => {
  const riceTypes = {
    Nigerian: 0,
    Ghanaian: 0,
    Senegal: 0
  };
  value.map(submission => {
    switch (submission.jollof) {
      case "Nigerian Jollof":
        riceTypes["Nigerian"] += 1;
        break;
      case "Ghanaian Jollof":
        riceTypes["Ghanaian"] += 1;
        break;
      case "Senegal Jollof":
        riceTypes["Senegal"] += 1;
        break;
    }
  });
  state.submissions = Object.assign({}, state.submissions, riceTypes);
};

const SET_SUBMISSION = (state, value) => {
  let jollofType = value.jollof.split(" ")[0];
  let cloneSubmissions = Object.assign({}, state.submissions);
  cloneSubmissions[value.jollof.split(" ")[0]] += 1;
  state.submissions = Object.assign({}, state.submissions, cloneSubmissions);
};

export default {
  SET_DB,
  SET_INITIAL_SUBMISSIONS,
  SET_SUBMISSION
};
