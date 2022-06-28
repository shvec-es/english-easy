import React from 'react';
import style from './Table.module.scss'
import {useGetOwnWordsQuery} from "../../../services/ReduxService";
import TableItem from "../TableItem/TableItem";

const Table = () => {
    const { data } = useGetOwnWordsQuery();

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
              {data &&
                data.map(el => {
                    return <TableItem key={el._id} {...el}/>
                })
              }
              </tbody>
          </table>
      </div>
    );
};

export default Table;
