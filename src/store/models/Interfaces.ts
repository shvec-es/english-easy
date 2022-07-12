export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    text: string;
}

export interface IWord {
    wordRu: string;
    wordEn: string;
}

export interface IGetWord {
    wordRu: string;
    wordEn: string;
    _id: string;
}
export interface IGetWords extends IGetWord {
    words: IGetWord[];
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