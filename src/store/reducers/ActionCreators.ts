import {AppDispatch} from "../store";
// import axios from "axios";
// import {ITodo} from "../models/Interfaces";
import {authSlice} from './AuthSlice'
import { modalSlice } from "./ModalSlice";



    export const changeStateCurrentUser = (value: boolean) => (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.renderCurrentUser(value))
    }

export const changeStateModal = (value: boolean, action: string) => (dispatch: AppDispatch) => {
    switch (action) {
        case 'add':
            dispatch(modalSlice.actions.setModalAdd(value))
            break;
        case 'change':
            dispatch(modalSlice.actions.setModalChange(value))
            break;
        default:
            return;

    }    

}
    
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
