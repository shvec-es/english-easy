export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  text: string;
}

export interface IWord {
  _id: string;
  wordRu: string;
  wordEn: string;
}

export interface IWordFunc {
  wordRu: string;
  wordEn: string;
}

export interface IPagination {
  page: number;
  limit?: number;
}

export interface ITotal {
  totalPages: number;
  currentPage: number;
  totalWords: number;
}

export interface IWords extends IWord, ITotal {
  // map(arg0: (el: IWord) => JSX.Element): import("react").ReactNode;
  words: IWord[];
  total: ITotal;
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

