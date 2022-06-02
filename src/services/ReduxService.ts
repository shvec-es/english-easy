import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IWords} from "../store/models/Interfaces";

export const ReduxService = createApi({
    reducerPath: 'AppAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://6293a313089f87a57ac3acbe.mockapi.io`
    }),
    tagTypes: ['PostApp'],
    endpoints: builder => ({
        fetchAllWords: builder.query<IWords[], string>({
            query: () => ({
                url: `/todos//englishwords`
            }),
            providesTags: result => ['PostApp']
        }),
        // createTodo: builder.mutation<ITodo, ITodo>({
        //     query: (todo) => ({
        //         url: `/todos/todoslist`,
        //         method: 'POST',
        //         body: todo
        //     }),
        //     invalidatesTags: ['PostApp']
        // }),
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