import Axios from 'axios'
import { Mutation, Action, Getter, State } from 'vuex-simple'

export interface AuthData{
    Username:String,
    Password:String
}

export default class AuthModule {
    @State()
    public Status = new String('');

    @State()
    public Token = new String(localStorage.getItem('token') || '');

    @State()
    public user = {};

    @Mutation()
    public auth_request(){
        this.Status = 'loading';
    }

    @Mutation()
    public auth_success(Token:String){
        this.Status = 'success';
        this.Token = Token;
    }

    @Mutation()
    public auth_error(){
        this.Status = 'error';
    }

    @Mutation()
    public auth_logout(){
        this.Status = '';
        this.Token = '';
    }

    @Action()
    public Login(User:AuthData){
        return new Promise((resolve, reject) => {
            this.auth_request();
            Axios.post('http://localhost:8000/auth/login', User).then(Response =>{
                const Token = Response.data.key;
                localStorage.setItem('token', Token);
                this.auth_success(Token);
                resolve(Response);
            }).catch(Error => {
                this.auth_error();
                localStorage.removeItem('token')
                reject(Error);
            })
        })
    }

    @Action()
    public Logout(){
        return new Promise((resolve, reject) => {
            this.auth_logout();
            localStorage.removeItem('token');
            resolve();
        })
    }

    @Getter()
    public get isLogin(){
        return !!this.Token;
    }

    @Getter()
    public get AuthStatus(){
        return this.Status;
    }
}