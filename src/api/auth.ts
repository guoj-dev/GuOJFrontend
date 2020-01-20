import axios from './session'
import Vue from 'vue'
import store from '@/store'
import session from './session';

export default {
    login(username: String, password: String) {
        return axios.post('/auth/login/', { username, password });
    },
    logout() {
        return axios.post('/auth/logout/', {});
    },
    createAccount(username: String, password1: String, password2: String, email: String) {
        return axios.post('/auth/registration/', { username, password1, password2, email });
    },
    changeAccountPassword(password1: String, password2: String) {
        return axios.post('/auth/password/change/', { password1, password2 });
    },
    sendAccountPasswordResetEmail(email: String) {
        return axios.post('/auth/password/reset/', { email });
    },
    resetAccountPassword(uid: Number, token: String, new_password1: String, new_password2: String) { // eslint-disable-line camelcase
        return axios.post('/auth/password/reset/confirm/', { uid, token, new_password1, new_password2 });
    },
    getAccountDetails() {
        return axios.get('/auth/user/');
    },
    updateAccountDetails(data: String) {
        return axios.patch('/auth/user/', data);
    },
    verifyAccountEmail(key: String) {
        return axios.post('/auth/registration/verify-email/', { key });
    },
}