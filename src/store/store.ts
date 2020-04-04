import { Module, State } from 'vuex-simple';
import AuthModule from './modules/auth';
import UserModule from './modules/user';
import SlidesModule from './modules/slides';
import WarnModule from './modules/warn';
import ThemeModule from './modules/theme';

export class Store {
    @Module()
    public Auth = new AuthModule()

    @Module()
    public User = new UserModule()

    @Module()
    public Slides = new SlidesModule()

    @Module()
    public Warn = new WarnModule()

    @Module()
    public Theme = new ThemeModule()
}