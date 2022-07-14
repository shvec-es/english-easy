import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import style from "./Table.module.scss";
import TableItem from "../TableItem/TableItem";
import { IWord, IWords } from "../../../store/models/Interfaces";
import { Modal, ChangeWord } from "../../../components";
import { changeStateModal } from "../../../store/reducers/ActionCreators";

interface ITableList {
  words: IWords;
}

const Table = ({ words }: ITableList) => {
  const [currentWord, setCurrentWord] = useState<IWord>({
    _id: "",
    wordRu: "",
    wordEn: "",
  });
  const { isModalOpenChangeWord } = useAppSelector((state) => state.ModalSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeWord = (word: IWord) => {
    setCurrentWord(word);
    dispatch(changeStateModal(true, "change"));
  };

  return (
    <>
      {isModalOpenChangeWord && (
        <Modal action="change">
          <ChangeWord {...currentWord} />
        </Modal>
      )}
      <div className={style.container}>
      <button
        className={style.button}
        onClick={() => navigate("/")}
      >
        <KeyboardBackspaceIcon />
      </button>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Translate</th>
              <th>Make changes</th>
              <th>Delete word</th>
            </tr>
          </thead>
          <tbody>
            {words &&
              words.map((word) => {
                return (
                  <TableItem
                    key={word._id}
                    {...word}
                    onChangeWord={onChangeWord}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
