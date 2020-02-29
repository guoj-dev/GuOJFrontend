import { Module, State } from 'vuex-simple'
import AuthModule from './modules/auth'
import UserModule from './modules/user'
import SlidesModule from './modules/slides'

export class Store {
    @Module()
    public Auth = new AuthModule()

    @Module()
    public User = new UserModule()

    @Module()
    public Slides = new SlidesModule()
}