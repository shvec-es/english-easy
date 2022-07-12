import {useGetWordsQuery} from '../../services/ReduxService'
import { IGetWord } from '../../store/models/Interfaces';
import WordsItem from '../WordsItem';

const AllWords = () => {
  const { data } = useGetWordsQuery();
  
  return (
    <>
      {data ? (
      <ul>
          {(data as unknown as IGetWord[]).map((word) => <WordsItem wordEn={word.wordEn} wordRu={word.wordRu} _id={word._id} />)}
        </ul>)
        :
      <div>Loading...</div>}
    </>
  )
};

export default AllWords;
