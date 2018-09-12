const hasSubmissions = (state, value) => {
  return (
    state.submissions["Nigerian"] > 0 ||
    state.submissions["Senegal"] > 0 ||
    state.submissions["Ghanaian"] > 0
  );
};

export default {
  hasSubmissions
};
