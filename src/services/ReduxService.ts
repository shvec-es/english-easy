import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ISignIn, ISignUp, ISignUpRes} from "../store/models/Interfaces";
import {useAppSelector} from "../store/hooks/redux";
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
        // updateTodo: builder.mutation<ITodo, ITodo>({
        //     query: (changes) => ({
        //         url: `/todos/todoslist/${changes.id}`,
        //         method: 'PUT',
        //         body: changes
        //     }),
        //     invalidatesTags: ['PostApp']
        // }),
        // deleteTodo: builder.mutation<ITodo, number>({
        //     query: (id) => ({
        //         url: `/todos/todoslist/${id}`,
        //         method: 'DELETE',
        //         body: id
        //     }),
        //     invalidatesTags: ['PostApp']
        // })
    })
})

export const {useCreateUserMutation, useLoginUserMutation, useLogoutMutation, useGetCurrentUserQuery} = ReduxService