/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Module used to handle general app's state.
 * @param {boolean} rejuvenation Describes to-be-upgraded app's state.
 */
const state = {
  rejuvenation: false,
};

const getters = {
  rejuvenation: (state: any) => state.rejuvenation,
};

const mutations = {
  mutateRejuvenation(state: any, { rejuvenation }: { rejuvenation: boolean }) {
    state.rejuvenation = rejuvenation;
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
