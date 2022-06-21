import {useGetWordsQuery} from '../../services/ReduxService'
import { IWord } from '../../store/models/Interfaces';
import AllWordsItem from './AllWordsItem/AllWordsItem'

const AllWords = () => {
  const { data } = useGetWordsQuery();
  
  return (
    <>
      {data ? (
      <ul>
          {(data as unknown as IWord[]).map((word) => <AllWordsItem wordEn={word.wordEn} wordRu={word.wordRu} />)}
        </ul>)
        :
      <div>Loading...</div>}
    </>
  )
};

export default AllWords;
