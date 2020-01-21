import { ActionContext, Module } from 'vuex';
import auth from '@/api/auth';
import session from '@/api/session';

const TOKEN_STORAGE = 'TOKEN_STORAGE';

export interface UserState {
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

export interface UserinfoState {
    Text:String
}

export interface UserJudgeState {
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
    CreatedProblemSetCount:Number,
    CreatedProblemCount:Number
}