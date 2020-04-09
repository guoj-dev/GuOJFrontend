import { Mutation, Action, Getter, State } from 'vuex-simple';

export interface NotificationData {
    Color: String;
    Text: String;
    Timeout: Number;
}

export default class NotificationModule {
    @State()
    Queue: Array<NotificationData> = [];

    @Mutation()
    public addNotification(NotificationData: NotificationData) {
        this.Queue.push(NotificationData);
    }

    @Mutation()
    public endNotification() {
        this.Queue.shift();
    }

    @Action()
    public AddNotification(NotificationData: NotificationData) {
        this.addNotification(NotificationData);
    }

    @Action()
    public EndNotification() {
        this.endNotification();
    }

    @Getter()
    public get NotificationExists() {
        return this.Queue.length !== 0;
    }

    @Getter()
    public get Color() {
        return this.Queue[0].Color;
    }

    @Getter()
    public get Text() {
        return this.Queue[0].Text;
    }

    @Getter()
    public get Timeout() {
        return this.Queue[0].Timeout;
    }
}
