import Axios from 'axios'
import { Mutation, Action, Getter, State } from 'vuex-simple'

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
    NamePlateColor: String,
    Text: String,
}

export default class UserModule {
    @State()
    public User: User;

    @State()
    public UserData: UserData;

    constructor() {
        this.User = { Username: '', UserID: 0 };
        this.UserData = { Name: '', Email: '', Avatar: '', Coins: 0, Rating: 0, Experience: 0, Contribution: 0, Nameplate: '', NameColor: '', NamePlateColor: '', Text: '' }
    }

    @Mutation()
    public update(Username: String, UserID: Number) {
        this.User.Username = Username;
        this.User.UserID = UserID;
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
            Axios.get('http://localhost:8000/auth/user').then(Response => {
                this.update(Response.data.username, Response.data.pk);
                resolve(Response);
            })
        })
    }

    @Action()
    public UpdateUserData() {
        return new Promise((resolve, reject) => {
            Axios.get('https://localhost:8000/api/users' + String(this.User.UserID) + '/').then(Response => {
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
                    NamePlateColor: Response.data.NamePlateColor,
                    Text: Response.data.Text,
                });
                resolve(Response)
            })
        })
    }
}
