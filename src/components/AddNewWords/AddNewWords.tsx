import React, { useState } from "react";
import { Box, Button, IconButton, Typography, TextField  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import sprite from '../../images/sprite.svg';
// import s from "./AddNewWords.module.css";
import { IWord } from "../../store/models/Interfaces";
import { ReduxService } from "../../services/ReduxService";
import { wordsValidate } from "../../helpers/AddWordsValidation";
// import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
// import { changeStateId } from '../../store/reducers/ActionCreators';

interface IProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewWords: React.FC<IProps> = ({ setActive }) => {
  // const dispatch = useAppDispatch();
  // const { id } = useAppSelector(state => state.WordsSlice);
  const [newWord, setNewWord] = useState<IWord>({ wordRu: "", wordEn: "" });
  const [addNewWord, {}] = ReduxService.useAddNewWordMutation();

  const [errors, setErrors] = useState(newWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
      setNewWord((prev) => ({ ...prev, [name]: value }));
      wordsValidate({ name, value, setErrors, errors });
    };
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addNewWord(newWord);
    } catch (err) {
      console.log(err);
    }
    closeModal();
  };

  const closeModal = () => {
    setActive(false);
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <IconButton
        sx={{ display: "block", marginLeft: "auto" }}
        aria-label="close"
        onClick={closeModal}
      >
        <CloseIcon />
      </IconButton>
      {/* <button className={s.close} type='button' onClick={closeModal}>
                <svg width="20" height="20" >
                    <use href={`${sprite}#cancel-circle`} />
                </svg>
            </button>         */}
      {/* <div className={s.container}>
                <p>{russianToEnglish ? 'Русский' : 'Английский'}</p>
                <input className={s.check} name='check' checked={russianToEnglish} type="checkbox" id="languages-switcher" onChange={()=>setRussianToEnglish(prevState=>!prevState)}/>
                <label className={s.icon} htmlFor="languages-switcher" arial-hidden="true">
                    <svg width="20" height="20"><use href={ `${sprite}#circle-right`}/></svg>
                </label>
                <p>{russianToEnglish ? 'Английский' : 'Русский'}</p>
            </div> */}
      <Typography
        sx={{ textAlign: "center", mb: "10px" }}
        component="h2"
        variant="h5"
      >
        Введите слово на русском и его английский перевод
      </Typography>
      <TextField
        error={errors.wordRu.length !== 0}
        helperText={errors.wordRu}
        margin="normal"
        required
        fullWidth
        type="text"
        id="wordRu"
        name="wordRu"
        placeholder="Яблоко"
        onChange={handleChange}
      />
      <TextField
        error={errors.wordEn.length !== 0}
        helperText={errors.wordEn}
        margin="normal"
        required
        fullWidth
        type="text"
        id="wordEn"
        name="wordEn"
        placeholder="Apple"
        onChange={handleChange}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Добавить слово
      </Button>
      {/* <div className={s.add}>
                     <input className={s.showtranslate} type='text' />
            <button  className={s.addword} type='submit'></button>
            </div> */}
    </Box>
  );
};

export default AddNewWords;
