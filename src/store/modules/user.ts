import Axios from 'axios'
import { Mutation, Action, Getter, State } from 'vuex-simple'

export interface UserData {

}

export interface User {
    Username: String,
    UserID: Number,
}

export default class UserModule {
    @State()
    public User: User;

    constructor() {
        this.User = { Username: '', UserID: 0 };
    }

    @Mutation()
    public update(Username: String, UserID: Number) {
        this.User.Username = Username;
        this.User.UserID = UserID;
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
                this.update(Response.data.username,Response.data.pk);
                resolve(Response);
            })
        })
    }
}
