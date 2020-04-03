import Vue from 'vue';
import Vuex from 'vuex';
import { IProductState } from '../interfaces';

Vue.use(Vuex);

const state: IProductState = {
    products: []
}