import { Module, State } from 'vuex-simple';
import AuthModule from './modules/auth';
import UserModule from './modules/user';
import SlidesModule from './modules/slides';
import WarnModule from './modules/notification';
import ThemeModule from './modules/theme';
import NotificationModule from './modules/notification';

export class Store {
    @Module()
    public Auth = new AuthModule()

    @Module()
    public User = new UserModule()

    @Module()
    public Slides = new SlidesModule()

    @Module()
    public Notification = new NotificationModule()

    @Module()
    public Theme = new ThemeModule()
}
