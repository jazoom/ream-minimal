'use strict';
import * as types from '../actionTypes';

export default () => {
  return {

    state: {
      testState1: false
    },

    mutations: {
      setTestState1(state, { value }) {
        state.testState1 = value;
      }
    },

    actions: {
      [types.ACTION1]({ commit, state }, payload) {
        commit('setTestState1', payload);
      }
    }

  }
};