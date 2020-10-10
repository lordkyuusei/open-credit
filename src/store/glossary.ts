/**
 * Const values to describe mutations & actions for vuex store.
 * @param {{string: string}} mutations Describes local updates.
 * @param {{string: string}} actins Describes async updates.
 */

const mutations = {
  MUTATE_ACCOUNT: 'mutateAccount',
  MUTATE_CONNECTED: 'mutateIsConnected',
  MUTATE_BORROWINGS: 'mutateBorrowings',
  MUTATE_LENDINGS: 'mutateLendings',
};

const actions = {
  CONNECT_ACCOUNT: 'connect',
  GET_BORROWINGS: 'getBorrowings',
  GET_LENDINGS: 'getLendings',
};

const endpoints = {
  CONNECT_ACCOUNT: 'https://endpoint.com/connect',
  GET_BORROWINGS: 'https://endpoint.com/borrowings',
  GET_LENDINGS: 'https://endpoint.com/lendings',
};

export default {
  m: mutations,
  a: actions,
  e: endpoints,
};
