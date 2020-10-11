/**
 * Const values to describe mutations & actions for vuex store.
 * @param {{string: string}} mutations Describes local updates.
 * @param {{string: string}} actins Describes async updates.
 */

const URI = 'https://localhost:44365/api/';

const mutations = {
  MUTATE_ACCOUNT: 'mutateAccount',
  MUTATE_ACCESS_TOKEN: 'mutateAccessToken',
  MUTATE_PROVIDERS: 'mutateProviders',
  MUTATE_CONNECTED: 'mutateIsConnected',
  MUTATE_BORROWINGS: 'mutateBorrowings',
  MUTATE_LENDINGS: 'mutateLendings',
};

const actions = {
  CONNECT_ACCOUNT: 'connect',
  GET_ACCESS_TOKEN: 'getAccessToken',
  GET_PROVIDERS: 'getProviders',
  GET_BORROWINGS: 'getBorrowings',
  GET_LENDINGS: 'getLendings',
};

const endpoints = {
  CONNECT_ACCOUNT: `${URI}Authentication/getToken`,
  GET_PROVIDERS: `${URI}Authentication/providers`,
  GET_BORROWINGS: 'https://endpoint.com/borrowings',
  GET_LENDINGS: 'https://endpoint.com/lendings',
};

export default {
  m: mutations,
  a: actions,
  e: endpoints,
};
