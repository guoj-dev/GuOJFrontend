import { ActionContext, Module } from 'vuex';
import Axios from 'axios';

export interface Loginstate {
    islogin: Boolean,
    id: Number,
    //tokenExpire: Number
}

const ModuleState: Loginstate = {
    islogin: false,
    id: 0,
    //tokenExpire: 0
}

const getters = {
    islogin: (ModuleState: Loginstate) => ModuleState.islogin,
    id: (ModuleState: Loginstate) => ModuleState.id
}

const mutations = {
    SetNotLogin(ModuleState: Loginstate){
        ModuleState.islogin=false;
    },
    Login(ModuleState: Loginstate, id: Number){
        ModuleState.id = id;
        ModuleState.islogin = true
    }
}

const actions = {
    async Login(context: ActionContext<Loginstate, any>){
        await Axios.get('/auth/user')
            .then(function (response) {
                alert(response.data)
            })
            .catch(function (error) {
                window.console.log(error);
            });

    }
}

export default {
    state: ModuleState,
    getters: getters,
    mutations: mutations,
    actions: actions
}