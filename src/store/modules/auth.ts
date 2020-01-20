import { ActionContext, Module } from 'vuex';
import auth from '@/api/auth';
import session from '@/api/session';
import {
    LOGIN_BEGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    REMOVE_TOKEN,
    SET_TOKEN,
} from './commit';

const TOKEN_STORAGE = 'TOKEN_STORAGE';
export interface Loginstate {
    authenticating: Boolean,
    error: Boolean,
    uid: Number,
    token: String,
}

const ModuleState: Loginstate = {
    authenticating: false,
    error: false,
    uid: -1,
    token: localStorage.getItem(TOKEN_STORAGE) || '',
}

const getters = {
    isAuthenticated: (ModuleState: Loginstate) => !!ModuleState.token,
    uid: (ModuleState: Loginstate) => ModuleState.uid
}

const actions = {
    Login(context: ActionContext<Loginstate, any>, username: String, password: String) {
        context.commit(LOGIN_BEGIN);
        return auth.login(username, password)
            .then((responses) => context.commit(SET_TOKEN, responses.data.key))
            .then(() => context.commit(LOGIN_SUCCESS))
            .catch(() => context.commit(LOGIN_FAILURE))
    },
    Logout(context: ActionContext<Loginstate, any>) {
        return auth.logout()
            .then(() => context.commit(LOGOUT))
            .finally(() => context.commit(REMOVE_TOKEN))
    },
}

const mutations = {
    [LOGIN_BEGIN](state: Loginstate) {
        state.authenticating = true;
        state.error = false;
    },
    [LOGIN_FAILURE](state: Loginstate) {
        state.authenticating = false;
        state.error = true;
    },
    [LOGIN_SUCCESS](state: Loginstate) {
        state.authenticating = false;
        state.error = false;
    },
    [LOGOUT](state: Loginstate) {
        state.authenticating = false;
        state.error = false;
    },
    [SET_TOKEN](state: Loginstate, token:String) {
        session.defaults.headers.Authorization = `Token ${token}`;
        state.token = token;
    },
    [REMOVE_TOKEN](state: Loginstate) {
        localStorage.removeItem(TOKEN_STORAGE);
        delete session.defaults.headers.Authorization;
        state.token = '';
    },
}



export default {
    state: ModuleState,
    getters: getters,
    mutations: mutations,
    actions: actions
}