import { useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks/redux';

import style from "../TableList/Table.module.scss";
import { ReduxService } from "../../../services/ReduxService";
import { Modal, ChangeWord } from "../../../components";
import { changeStateModal } from '../../../store/reducers/ActionCreators';

interface IItemData {
    _id: string;
    wordRu: string;
    wordEn: string;
    owner: string;
    __v: number;
}

const TableItem = ({ _id: id, wordRu, wordEn, owner }: IItemData) => {
      const [updatedWordId, setUpdatedWordId] = useState<string>('');
    const [deleteWord, { }] = ReduxService.useDeleteWordMutation();
      const dispatch = useAppDispatch();
  const { isModalOpenChangeWord } = useAppSelector(state => state.ModalSlice);
    
    const onDeleteWord = async() => {
        try {
      await deleteWord(id);
    } catch (error) {
      console.log(error);
    }
    }

    function onChangeWord() {
        console.log('change', id);
        dispatch(changeStateModal(true, 'change'));
        setUpdatedWordId(id);
    }

    return (
        <>
      <tr>
          <td className={style['col-1']}>{wordRu}</td>
          <td className={style['col-2']}>{wordEn}</td>
          <td
            className={style['col-3']}
            onClick={onChangeWord}
          >
              Change</td>
          <td
            className={style['col-4']}
            onClick={onDeleteWord}
          >
              Delete
          </td>
        </tr>
        {isModalOpenChangeWord && (
        <Modal action='change'>
          <ChangeWord wordEn={wordEn} wordRu={wordRu} _id={updatedWordId} />
        </Modal>
            )}
            </>
    );
};

export default TableItem;
