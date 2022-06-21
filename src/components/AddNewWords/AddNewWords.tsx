import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import s from './AddNewWords.module.css';
import { IWord } from '../../store/models/Interfaces';
import { ReduxService } from '../../services/ReduxService';
// import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
// import { changeStateId } from '../../store/reducers/ActionCreators';

interface IProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewWords: React.FC<IProps> = ({setActive}) => {
    // const dispatch = useAppDispatch();
    // const { id } = useAppSelector(state => state.WordsSlice);
    const [newWord, setNewWord] = useState<IWord>({ wordRu: '', wordEn: '' });
    const [addNewWord, {}] = ReduxService.useAddNewWordMutation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setNewWord((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addNewWord(newWord)
        } catch (err) {
            console.log(err);
        } 
        closeModal();
    }

    const closeModal = () => {
        setActive(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className={s.close} type='button' onClick={closeModal}>
                <svg width="20" height="20" >
                    <use href={`${sprite}#cancel-circle`} />
                </svg>
            </button>        
            {/* <div className={s.container}>
                <p>{russianToEnglish ? 'Русский' : 'Английский'}</p>
                <input className={s.check} name='check' checked={russianToEnglish} type="checkbox" id="languages-switcher" onChange={()=>setRussianToEnglish(prevState=>!prevState)}/>
                <label className={s.icon} htmlFor="languages-switcher" arial-hidden="true">
                    <svg width="20" height="20"><use href={ `${sprite}#circle-right`}/></svg>
                </label>
                <p>{russianToEnglish ? 'Английский' : 'Русский'}</p>
            </div> */}
            <h2 className={s.title}>Введите слово на русском и его английский перевод</h2>
            <input className={s.input} type='text' value={newWord.wordRu} name='wordRu' placeholder='Яблоко' onChange={handleChange}/>
            <input className={s.input} type='text' value={newWord.wordEn} name='wordEn' placeholder='Apple' onChange={handleChange}/>
            <button className={s.translate} type='submit'>Добавить слово</button>
            {/* <div className={s.add}>
                     <input className={s.showtranslate} type='text' />
            <button  className={s.addword} type='submit'></button>
            </div> */}
       
        </form>
    )
}

export default AddNewWords;