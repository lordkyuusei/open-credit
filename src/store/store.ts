import Vue from 'vue';
import Vuex from 'vuex';

import openCredit from './modules/open-credit';
import appStore from './modules/app';

Vue.use(Vuex);

const modules = {
  oc: openCredit,
  app: appStore,
};

const store = new Vuex.Store({
  modules,
});

export default store;
