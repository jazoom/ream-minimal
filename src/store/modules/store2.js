'use strict';
import * as types from '../actionTypes';

export default {

  state: {
    testState2: false
  },

  mutations: {
    setTestState2(state, { value }) {
      state.testState2 = value;
    }
  },

  actions: {
    [types.ACTION2]({ commit, state }, payload) {
      commit('setTestState2', payload);
    }
  }

};