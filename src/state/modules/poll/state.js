import cloneDeep from "lodash/cloneDeep";

const state = {
  db: null,
  submissions: {
    Nigerian: 0,
    Ghanaian: 0,
    Senegal: 0
  }
};

export const getState = () => cloneDeep(state);

export default getState();
