import React, {useState} from 'react';
import { useCreateUserMutation } from "../../services/ReduxService";
import { useAppSelector } from '../../store/hooks/redux'
import styles from './RegForm.module.scss'
import showPassSvg from '../../images/eye.svg'

const RegistrationForm = () => {
    const [showPass, setShowPass] = useState(false);
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
          <div className={styles['registration-form']}>
              <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={`${styles.label}`} htmlFor="name">Name</label>
                  <input id='name'
                         className={styles.input}
                         name='name'
                         onChange={handleChange}
                         type="text"
                         value={formState.name}
                  />

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

                  <button className={styles['submit-btn']} type='submit'>SignUp</button>
              </form>
          </div>
    );
};

export default RegistrationForm;
