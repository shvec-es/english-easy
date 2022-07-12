import React from 'react';
import style from "../TableList/Table.module.scss";

interface IItemData {
    _id: string;
    wordRu: string;
    wordEn: string;
    owner: string;
    __v: number;
}

const TableItem = ({_id: id, wordRu, wordEn, owner}: IItemData) => {
    function onDeleteWord() {
        console.log('delete', id)
    }

    function onChangeWord() {
        console.log('change', id)
    }

    return (
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
    );
};

export default TableItem;
