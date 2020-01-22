import { ActionContext, Module, ModuleTree } from 'vuex';
import auth from '@/api/auth';
import session from '@/api/session';

const TOKEN_STORAGE = 'TOKEN_STORAGE';

export interface UserState{
    id: Number,
    username: String,
    is_superuser: Boolean,
    email: String,
    is_active: Boolean,
    Sex: String,
    Avatar: String,
    Coins: Number,
    Rating: Number,
    Experience: Number,
    Nameplate: String,
    NameColor: String,
    NameplateColor: String,
    UserRegisterDate: String,
    Contribution: String,
}

export interface UserinfoState{
    Text: String,
}

export interface UserJudgeState{
    CompileErrorCount: Number,
    AcceptedCount: Number,
    WrongAnswerCount: Number,
    RuntimeErrorCount: Number,
    TimeLimitExceededCount: Number,
    MemoryLimitExceededCount: Number,
    OutputLimitExceededCount: Number,
    ParticallyCorrectCount: Number,
    SystemErrorCount: Number,
}

export interface UserContributionState{
    CreatedProblemSetCount: Number,
    CreatedProblemCount: Number
}

const UserState: UserState = {
    id: 0,
    username: '',
    is_superuser: false,
    email: '',
    is_active: true,
    Sex: '',
    Avatar: '',
    Coins: 0,
    Rating: 0,
    Experience: 0,
    Nameplate: '',
    NameColor: '',
    NameplateColor: '',
    UserRegisterDate: '',
    Contribution: '',
}

const UserinfoState: UserinfoState = {
    Text: '',
}

const UserJudgeState: UserJudgeState = {
    CompileErrorCount: 0,
    AcceptedCount: 0,
    WrongAnswerCount: 0,
    RuntimeErrorCount: 0,
    TimeLimitExceededCount: 0,
    MemoryLimitExceededCount: 0,
    OutputLimitExceededCount: 0,
    ParticallyCorrectCount: 0,
    SystemErrorCount: 0,
}

const UserContributionState: UserContributionState = {
    CreatedProblemSetCount: 0,
    CreatedProblemCount: 0
}

export default {
    namespaced:true,
    state:UserState,
    getters: {
        username:(UserState: UserState)=>UserState.username,
        email:(UserState: UserState)=>UserState.email,
        Sex:(UserState: UserState)=>UserState.Sex,
        Avatar:(UserState: UserState)=>UserState.Avatar,
        Coins:(UserState: UserState)=>UserState.Coins,
        Rating:(UserState: UserState)=>UserState.Rating,
        Experience:(UserState: UserState)=>UserState.Experience,
        Nameplate:(UserState: UserState)=>UserState.Nameplate,
        NameColor:(UserState: UserState)=>UserState.NameColor,
        NameplateColor:(UserState: UserState)=>UserState.NameplateColor,
        UserRegisterDate:(UserState: UserState)=>UserState.UserRegisterDate,
        Contribution:(UserState: UserState)=>UserState.Contribution,
    },
    mutations: {
        
    },
    actions: {

    },
    modules: {
        info:{
            namespaced:true,
            state:UserinfoState,
            getters:{

            },
            mutations:{

            },
            actions:{

            }
        },
        judge:{
            namespaced:true,
            state:UserJudgeState,
            getters:{

            },
            mutations:{

            },
            actions:{

            }
        },
        contribution:{
            namespaced:true,
            state:UserContributionState,
            getters:{

            },
            mutations:{

            },
            actions:{

            }
        }
    }
}