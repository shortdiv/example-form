const hasSubmissions = (state, value) => {
  return (
    state.submissions["Nigerian"] > 0 ||
    state.submissions["Senegal"] > 0 ||
    state.submissions["Ghanaian"] > 0
  );
};

const submissionCounts = (state, value) => {
  const riceTypes = { Nigerian: 0, Ghanaian: 0, Senegal: 0 };
  for (const submissionId in state.submissions) {
    const jollofMap = {
      "Nigerian Jollof": "Nigerian",
      "Senegal Jollof": "Senegal",
      "Ghanaian Jollof": "Ghanaian"
    };
    if (state.submissions[submissionId].body === undefined) {
      console.log(state.submissions[submissionId]);
      console.log(submissionId);
    }
    riceTypes[
      jollofMap[state.submissions[submissionId].body.human_fields.Jollof]
    ] += 1;
  }
  return riceTypes;
};

export default {
  hasSubmissions,
  submissionCounts
};
