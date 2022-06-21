import {AppDispatch} from "../store";
// import axios from "axios";
// import {ITodo} from "../models/Interfaces";
import {authSlice} from './AuthSlice'
// import { wordsSlice } from "./WordsSlice";



    export const changeStateCurrentUser = (value: boolean) => (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.renderCurrentUser(value))
    }

// export const changeStateId = (id: string) => (dispatch: AppDispatch) => {
//         dispatch(wordsSlice.actions.changeId(id))
//     }
// 1
// export const fetchTodos = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(todoSlice.actions.todosFetching())
//         const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
//         dispatch(todoSlice.actions.todosFetchingSuccess(response.data))
//     }catch (e) {
//         dispatch(todoSlice.actions.todosFetchingError('ошибка'))
//     }
// }


// 2
// export const fetchTodos = createAsyncThunk(
//   'todos/fetchAll', async (_, thunkApi) => {
//       try {
//           const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
//           return response.data
//       }catch (e) {
//           return thunkApi.rejectWithValue('Не удалось')
//       }
//   }
// )
