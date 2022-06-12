import React, {useState} from 'react';
import { useLoginUserMutation } from "../../services/ReduxService";
import { useAppSelector } from '../../store/hooks/redux'

const LoginForm = () => {
    const [loginUser, {}] = useLoginUserMutation()

    // const {
    //     token
    // } = useAppSelector(state => state.AuthSlice);

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    function handleChange(e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = e.currentTarget

        setFormState({
            ...formState,
            [name]: value,
        })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            await loginUser(formState)
        }catch (e) {
            console.log(e)
        }
    }

    return (
      <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input id='email'
                     name='email'
                     onChange={handleChange}
                     type="text"
                     value={formState.email}
              />

              <label htmlFor="password">Password</label>
              <input id='password'
                     name='password'
                     onChange={handleChange}
                     type="text"
                     value={formState.password}
              />

              <button type='submit'>SignIn</button>
          </form>
      </>
    );
};

export default LoginForm;
