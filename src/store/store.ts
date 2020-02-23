import { Module, State } from 'vuex-simple'
import AuthModule from './modules/auth'

export class Store {
    @Module()
    public Auth = new AuthModule()
}