import React, { useState } from "react";
import { Box, IconButton, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
// import sprite from '../../images/sprite.svg';
// import s from "./AddNewWords.module.css";
import {IWord, IWordFunc} from "../../store/models/Interfaces";
import { useAddNewWordMutation, useGetWordsQuery } from "../../services/ReduxService";
import { wordsValidate } from "../../helpers/AddWordsValidation";
import {useAppDispatch} from '../../store/hooks/redux';
import { changeStateModal } from '../../store/reducers/ActionCreators';

const AddNewWords: React.FC = () => {
  const dispatch = useAppDispatch();
  const [newWord, setNewWord] = useState<IWordFunc>({ wordRu: "", wordEn: "" });
  const [addNewWord, { isLoading }] = useAddNewWordMutation();
  const [errors, setErrors] = useState(newWord);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);
  const { data } = useGetWordsQuery({page, limit});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewWord((prev) => ({ ...prev, [name]: value.toLowerCase() }));
    wordsValidate({ name, value, setErrors, errors });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!(data as unknown as IWordFunc[]).find(word => word.wordEn === newWord.wordEn)) {
         await addNewWord(newWord);
         toast.success(`${newWord.wordEn} added successfully!👌`)
      } else {
        throw new Error();
      }
} catch (error) {
  toast.error(`${newWord.wordEn} already exsist!`);
}
    closeModal();
  };

  const closeModal = () => {
    dispatch(changeStateModal(false, 'add'));
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
          Add word in russian and english
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
          placeholder="Яблоко*"
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
          placeholder="Apple*"
          onChange={handleChange}
        />
        <LoadingButton
          loading={isLoading}
          loadingIndicator="Adding..."
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add word
        </LoadingButton>
      </Box>
    </>
  );
};

export default AddNewWords;
