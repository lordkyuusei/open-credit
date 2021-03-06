/* eslint-disable  @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Types from '@/store/glossary';

const state = {
  account: [],
  accessToken: {},
  providers: [],
  lendings: {},
  borrowings: {},
  isConnected: false,
};

const getters = {
  account: (state: any) => state.account,
  accessToken: (state: any) => state.accessToken,
  providers: (state: any) => state.providers,
  lendings: (state: any) => state.lendings,
  borrowings: (state: any) => state.borrowings,
  isConnected: (state: any) => state.isConnected,
};

const mutations = {
  /* simple mutations */
  mutateAccount(state: any, { account }: { account: [string, string] }) {
    state.account = account;
  },
  mutateAccessToken(state: any, { accessToken }: { accessToken: {} }) {
    state.accessToken = accessToken;
  },
  mutateProviders(state: any, { providers }: { providers: any }) {
    state.providers = providers;
  },
  mutateLendings(state: any, { lendings }: { lendings: any }) {
    state.lendings = lendings;
  },
  mutateBorrowings(state: any, { borrowings }: { borrowings: any }) {
    state.borrowings = borrowings;
  },
  mutateIsConnected(state: any, { isConnected }: { isConnected: boolean}) {
    state.isConnected = isConnected;
  },
};

const actions = {
  connect({ commit }: { commit: any }, { account }: { account: [string, string]}) {
    axios
      .get(Types.e.CONNECT_ACCOUNT)
      .then(() => {
        [
          { type: Types.m.MUTATE_ACCOUNT, account },
          { type: Types.m.MUTATE_CONNECTED, isConnected: true },
        ].map((opt) => commit(opt));
      }).catch(() => {
        [
          { type: Types.m.MUTATE_ACCOUNT, account },
          { type: Types.m.MUTATE_CONNECTED, isConnected: true },
        ].map((opt) => commit(opt));
      });
  },
  getProviders({ commit }: { commit: any }) {
    axios
      .get(Types.e.GET_PROVIDERS)
      .then((response: any) => {
        const { data: providers } = response;
        const opt = { type: Types.m.MUTATE_PROVIDERS, providers };
        commit(opt);
      })
      .catch(() => {
        const opt = { type: Types.m.MUTATE_PROVIDERS, providers: [] };
        commit(opt);
      });
  },
  getAccessToken({ commit }: { commit: any }) {
    axios
      .get(Types.e.CONNECT_ACCOUNT)
      .then((response: any) => {
        const { data: accessToken } = response;
        const opt = { type: Types.m.MUTATE_ACCESS_TOKEN, accessToken };
        commit(opt);
      })
      .catch(() => {
        const opt = { type: Types.m.MUTATE_ACCESS_TOKEN, accessToken: {} };
        commit(opt);
      });
  },
  getBorrowings({ commit }: { commit: any }, { accountId }: { accountId: number}) {
    axios
      .get(Types.e.GET_BORROWINGS + accountId.toString())
      .then((response: any) => {
        const { borrowings } = response;
        const opt = { type: Types.m.MUTATE_BORROWINGS, borrowings };
        commit(opt);
      });
  },
  getLendings({ commit }: { commit: any }, { accountId }: { accountId: number}) {
    axios
      .get(Types.e.GET_LENDINGS + accountId.toString())
      .then((response: any) => {
        const { lendings } = response;
        const opt = { type: Types.m.MUTATE_LENDINGS, lendings };
        commit(opt);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
