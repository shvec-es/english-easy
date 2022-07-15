import { toast } from "react-toastify";
import style from "../TableList/Table.module.scss";
import { ReduxService } from "../../../services/ReduxService";
import { IWord } from '../../../store/models/Interfaces';

interface IItemData {
    _id: string;
    wordRu: string;
    wordEn: string;
    onChangeWord: (word: IWord)=> void;
}

const TableItem = ({ _id, wordRu, wordEn, onChangeWord }: IItemData) => {
    // eslint-disable-next-line no-empty-pattern
    const [deleteWord, { }] = ReduxService.useDeleteWordMutation();
    
  const onDeleteWord = async () => {
    await toast.promise(deleteWord(_id), {
      pending: `${wordEn} is deleting`,
      success: `${wordEn} deleted successfully!👌`,
      error: 'Something wrong!🤯'
    });

    }

    return (
        <>
      <tr>
          <td className={style['col-1']}>{wordRu}</td>
          <td className={style['col-2']}>{wordEn}</td>
          <td
            className={style['col-3']}
            onClick={()=>onChangeWord({_id, wordRu, wordEn})}
          >
              Change</td>
          <td
            className={style['col-4']}
            onClick={onDeleteWord}
          >
              Delete
          </td>
        </tr>
            </>
    );
};

export default TableItem;
