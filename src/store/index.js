import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import { state, getters, mutations } from "./mutations"
import actions from "./actions"



import menu from "./modules/menu"
import role from "./modules/role"
import cate from './modules/cate'
import specs from './modules/specs'
import goods from './modules/goods'

export default new Vuex.Store({
	state, mutations, actions, getters, modules: {
		menu, role, cate, specs, goods
	}
})