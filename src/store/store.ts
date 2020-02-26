import { Module, State } from 'vuex-simple'
import AuthModule from './modules/auth'
import UserModule from './modules/user'

export class Store {
    @Module()
    public Auth = new AuthModule()

    @Module()
    public User = new UserModule()
}