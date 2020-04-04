import Axios from 'axios';
import { Mutation, Action, Getter, State } from 'vuex-simple';

export interface User {
    Username: String,
    UserID: Number,
}
export interface UserData {
    Name: String,
    Email: String,
    Avatar: String,
    Coins: Number,
    Rating: Number,
    Experience: Number,
    Contribution: Number,
    Nameplate: String,
    NameColor: String,
    NameplateColor: String,
    Text: String,
}

export default class UserModule {
    @State()
    public User: User;

    @State()
    public UserData: UserData;

    constructor() {
        this.User = { Username: '', UserID: 0 };
        this.UserData = { Name: '', Email: '', Avatar: '', Coins: 0, Rating: 0, Experience: 0, Contribution: 0, Nameplate: '', NameColor: '', NameplateColor: '', Text: '' };
    }

    @Mutation()
    public update(NewUser: User) {
        this.User = NewUser;
    }

    @Mutation()
    public update_userdata(NewUserData: UserData) {
        this.UserData = NewUserData;
    }

    @Mutation()
    public delete() {
        this.User.Username = '';
        this.User.UserID = 0;
    }

    @Action()
    public Update() {
        return new Promise((resolve, reject) => {
            Axios.get('/api/auth/user/').then(Response => {
                this.update({ Username: Response.data.username, UserID: Response.data.pk });
                resolve(Response);
            });
        });
    }

    @Action()
    public UpdateUserData() {
        return new Promise((resolve, reject) => {
            Axios.get('/api/users/' + String(this.User.UserID) + '/').then(Response => {
                this.update_userdata({
                    Name: Response.data.username,
                    Email: Response.data.email,
                    Avatar: Response.data.Avatar,
                    Coins: Response.data.Coins,
                    Rating: Response.data.Rating,
                    Experience: Response.data.Experience,
                    Contribution: Response.data.Contribution,
                    Nameplate: Response.data.Nameplate,
                    NameColor: Response.data.NameColor,
                    NameplateColor: Response.data.NameplateColor,
                    Text: Response.data.Text,
                });
                resolve(Response);
            });
        });
    }

    @Getter()
    public get Username() {
        return this.User.Username;
    }

    @Getter()
    public get UserID() {
        return this.User.Username;
    }

    @Getter()
    public get Avatar() {
        return this.UserData.Avatar;
    }

    @Getter()
    public get Nameplate() {
        return this.UserData.Nameplate;
    }

    @Getter()
    public get NameColor() {
        return this.UserData.NameColor;
    }

    @Getter()
    public get NameplateColor() {
        return this.UserData.NameColor;
    }

    @Getter()
    public get Coins() {
        return this.UserData.Coins;
    }

    @Getter()
    public get Rating() {
        return this.UserData.Rating;
    }

    @Getter()
    public get Experince() {
        return this.UserData.Experience;
    }

    @Getter()
    public get Contribution() {
        return this.UserData.Contribution;
    }
}
