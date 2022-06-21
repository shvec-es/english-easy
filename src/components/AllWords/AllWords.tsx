import {useGetWordsQuery} from '../../services/ReduxService'
import { IWord } from '../../store/models/Interfaces';
import WordsItem from '../WordsItem';

const AllWords = () => {
  const { data } = useGetWordsQuery();
  
  return (
    <>
      {data ? (
      <ul>
          {(data as unknown as IWord[]).map((word) => <WordsItem wordEn={word.wordEn} wordRu={word.wordRu} />)}
        </ul>)
        :
      <div>Loading...</div>}
    </>
  )
};

export default AllWords;
