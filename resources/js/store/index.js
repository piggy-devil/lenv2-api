// import Vue from 'vue';
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './auth'


export default createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth
    }
})