import React from "react";
import style from "./Table.module.scss";
import TableItem from "../TableItem/TableItem";
import { IWords } from "../../../store/models/Interfaces";

interface ITableList {
  words: IWords;
}

const Table = ({ words }: ITableList) => {
  return (
    <div className={style.container}>
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
            words.map((el) => {
              return <TableItem key={el._id} {...el} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
