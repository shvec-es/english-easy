import React, { useState } from "react";
import { Box, IconButton, Typography, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import {IWord, IWordFunc} from "../../store/models/Interfaces";
import { ReduxService } from "../../services/ReduxService";
import {useAppDispatch} from '../../store/hooks/redux';
import { changeStateModal } from '../../store/reducers/ActionCreators';

const ChangeWord = ({ wordEn, wordRu, _id }: IWord) => {
  const dispatch = useAppDispatch();
  const [updatedWord, setUpdatedWord] = useState<IWordFunc>({ wordRu, wordEn});
  const [updateWord, { isLoading}] = ReduxService.useUpdateWordMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      
    setUpdatedWord({ ...updatedWord, [name]: value.toLowerCase() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateWord({ _id, ...updatedWord });
      toast.success(`${updatedWord.wordEn} updated👌`)
    } catch (err) {
      console.log(err);
      toast.error('Something wrong!');
    }
    closeModal();
  };

  const closeModal = () => {
    dispatch(changeStateModal(false, 'change'));
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
        <Typography
          sx={{ textAlign: "center", mb: "10px" }}
          component="h2"
          variant="h5"
        >
          You can change your word here
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          type="text"
          id="wordRu"
                  name="wordRu"
                  value={updatedWord.wordRu}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          type="text"
          id="wordEn"
                  name="wordEn"
                  value={updatedWord.wordEn}
          onChange={handleChange}
        />
        <LoadingButton
          loading={isLoading}
          loadingIndicator="Updating..."
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update word
        </LoadingButton>
      </Box>
    </>
  );
};

export default ChangeWord;
