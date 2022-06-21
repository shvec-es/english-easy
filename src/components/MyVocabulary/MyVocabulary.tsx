import { useGetOwnWordsQuery } from "../../services/ReduxService";
import AllWordsItem from '../AllWords/AllWordsItem/AllWordsItem';
import { IWord } from "../../store/models/Interfaces";

const MyVocabulary = () => {
    const { data } = useGetOwnWordsQuery();
  
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
}

export default MyVocabulary;