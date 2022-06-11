import React, {useState} from 'react';
import { useCreateUserMutation } from "../../services/ReduxService";
import { useAppSelector } from '../../store/hooks/redux'

const RegistrationForm = () => {
    const [createUser, {}] = useCreateUserMutation()

    // const {
    //     token
    // } = useAppSelector(state => state.AuthSlice);

    const [formState, setFormState] = useState({
        name: '',
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
            await createUser(formState)
        }catch (e) {
            console.log(e)
        }
    }

    return (
      <>
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id='name'
                     name='name'
                     onChange={handleChange}
                     type="text"
                     value={formState.name}
              />

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

              <button type='submit'>SignUp</button>
          </form>
      </>
    );
};

export default RegistrationForm;
