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

export interface IWords extends IWord {
    map(arg0: (el: any) => JSX.Element): import("react").ReactNode;
    words: IWord[];
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