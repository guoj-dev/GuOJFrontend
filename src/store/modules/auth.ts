import Axios from 'axios'
import { Mutation, Action, Getter, State } from 'vuex-simple'

export interface User{
    Username:String,
    uid:Number
}

export interface AuthData{
    username:String,
    password:String
}

export default class AuthModule {
    @State()
    public status = new String('');

    @State()
    public token = new String(localStorage.getItem('token') || '');

    @State()
    public user = {};

    @Mutation()
    public auth_request(){
        this.status = 'loading';
    }

    @Mutation()
    public auth_success(token:String){
        this.status = 'success';
        this.token = token;
    }

    @Mutation()
    public auth_error(){
        this.status = 'error';
    }

    @Mutation()
    public auth_logout(){
        this.status = '';
        this.token = '';
    }

    @Action()
    public login(User:AuthData){
        return new Promise((resolve, reject) => {
            this.auth_request();
            Axios.post('http://localhost:8000/auth/login', User).then(Response =>{
                const token = Response.data.key;
                localStorage.setItem('token', token);
                this.auth_success(token);
                resolve(Response);
            }).catch(Error => {
                this.auth_error(Error);
                localStorage.removeItem('token')
                reject(Error);
            })
        })
    }
}