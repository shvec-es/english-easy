import React, {useState} from 'react';
import { useLoginUserMutation } from "../../services/ReduxService";
import { useAppSelector } from '../../store/hooks/redux'
import {inspect} from "util";
import styles from './LoginForm.module.scss'
import showPassSvg from "../../images/eye.svg";

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
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
      <div className={styles['login-form']}>
          <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input id='email'
                     className={styles.input}
                     name='email'
                     onChange={handleChange}
                     type="text"
                     value={formState.email}
              />

              <label className={styles.label} htmlFor="password">Password</label>
              <div className={styles['password-container']}>
                  <img className={styles['show-pass']}
                       src={showPassSvg}
                       alt="showpasssvg"
                       onClick={() => setShowPass(!showPass)}
                  />
                  {showPass ?
                    <input id='password'
                           className={styles.input}
                           name='password'
                           onChange={handleChange}
                           type="text"
                           value={formState.password}
                    />
                    :
                    <input id='password'
                           className={styles.input}
                           name='password'
                           onChange={handleChange}
                           type="password"
                           value={formState.password}
                    />
                  }
              </div>

              <button className={styles['submit-btn']} type='submit'>SignIn</button>
          </form>
      </div>
    );
};

export default LoginForm;
