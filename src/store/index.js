'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import store1 from './modules/store1';
import store2 from './modules/store2';

Vue.use(Vuex);

// create the store-creator function: https://ssr.vuejs.org/en/api.html#runinnewcontext
const createStore = () => new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production', // when in 'development' make it so whenever Vuex state is mutated outside of mutation handlers, an error will be thrown

  modules: {
    store1,
    store2
  }

});

export default createStore;