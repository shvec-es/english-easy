import React, { useState } from 'react';
import sprite from '../../images/sprite.svg';
import s from './AddNewWords.module.css';
import {IWords} from '../../store/models/Interfaces';

interface IProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewWords: React.FC<IProps> = ({setActive}) => {
    // const [russianToEnglish, setRussianToEnglish] = useState<boolean>(true);
    const [newWord, setNewWord] = useState<IWords>({id: '', wordRu: '', wordEn: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setNewWord((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(newWord);
        setNewWord({id:'', wordRu: '', wordEn: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className={s.close} type='button' onClick={() => setActive(false)}>
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