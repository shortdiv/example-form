const hasSubmissions = (state, value) => {
  return Object.keys(state.submissions).length > 0;
};

const submissionCounts = (state, value) => {
  const riceTypes = { Nigerian: 0, Ghanaian: 0, Senegal: 0 };
  for (const submissionId in state.submissions) {
    const jollofMap = {
      "Nigerian Jollof": "Nigerian",
      "Senegal Jollof": "Senegal",
      "Ghanaian Jollof": "Ghanaian"
    };
    riceTypes[
      jollofMap[state.submissions[submissionId].body.human_fields.Jollof]
    ] += 1;
  }
  return riceTypes;
};

const totalSubmissionCount = (state, value) => {
  return Object.keys(state.submissions).length;
};

export default {
  hasSubmissions,
  submissionCounts,
  totalSubmissionCount
};
