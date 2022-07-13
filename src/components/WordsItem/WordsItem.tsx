import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import { ReduxService } from "../../services/ReduxService";
import { IWord } from "../../store/models/Interfaces";
import { Modal, ChangeWord } from "../../components";
import { changeStateModal } from '../../store/reducers/ActionCreators';
import { useState } from 'react';

const WordsItem = ({ wordEn, wordRu, _id }: IWord) => {

  const [deleteWord, { }] = ReduxService.useDeleteWordMutation();
  const dispatch = useAppDispatch();
  const { isModalOpenChangeWord } = useAppSelector(state => state.ModalSlice);

  const handleChangeWord = async () => {
    console.log(_id);
    dispatch(changeStateModal(true, 'change'))
  }

  const handleDelete = async () => {
    try {
      await deleteWord(_id);
    } catch (error) {
      console.log(error);
    }
    
  }
  
  return (
    <>
    <li key={_id}>
      <p>{`${wordEn}: ${wordRu}`}</p>
      <button type="button" onClick={handleChangeWord}>Change word</button>
      <button type="button" onClick={handleDelete}>Delete</button>
      </li>
      {isModalOpenChangeWord && (
        <Modal action='change'>
          <ChangeWord wordEn={wordEn} wordRu={wordRu} _id={_id} />
        </Modal>
      )}
    </>
  );
};

export default WordsItem;
