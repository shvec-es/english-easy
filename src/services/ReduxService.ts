import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ISignIn, ISignUp, ISignUpRes, IWord, IWords} from "../store/models/Interfaces";
import {RootState} from "../store/store";


export const ReduxService = createApi({
    reducerPath: 'AppAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://english-easy-dr.herokuapp.com`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).AuthSlice.token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['PostApp'],
    endpoints: build => ({
        createUser: build.mutation<ISignUpRes, ISignUp>({
            query: (user) => ({
                url: `/api/auth/registration`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['PostApp']
        }),
        loginUser: build.mutation<ISignUpRes, ISignIn>({
            query: (user) => ({
                url: `/api/auth/login`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['PostApp']
        }),
        logout: build.mutation<null, string>({
            query: () => ({
                url: `/api/auth/logout`,
                method: 'POST',
            }),
            invalidatesTags: ['PostApp']
        }),
        getCurrentUser: build.query<any, string>({
            query: () => ({
                url: `api/auth/current`
            }),
            providesTags: result => ['PostApp']
        }),
        addNewWord: build.mutation<IWord, Partial<IWord>>({
            query: (word) => ({
                url: `/api/words/create`,
                method: 'POST',
                body: word
            }),
            invalidatesTags: ['PostApp']
        }),
        getWords: build.query<IWords, void>({
            query: () => ({
                url: `/api/words/getall`
            }),
            providesTags: result => ['PostApp']
        }),
        getOwnWords: build.query<IWords, void>({
            query: () => ({
                url: `/api/words/vocabulary`
            }),
            providesTags: result => ['PostApp']
        })
    })
})

export const {useCreateUserMutation, useLoginUserMutation, useLogoutMutation, useGetCurrentUserQuery, useAddNewWordMutation, useGetWordsQuery, useGetOwnWordsQuery} = ReduxService