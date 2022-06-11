export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    text: string;
}

export interface IWords {
    id: string;
    wordEn: string;
    wordRu: string;
}

export interface ISignUp {
    name: string;
    email: string;
    password: string;
}

export interface ISignIn {
    email: string;
    password: string;
}

export interface ISignUpRes {
    token: string;
}