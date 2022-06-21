import { useGetOwnWordsQuery } from "../../services/ReduxService";
import WordsItem from '../WordsItem';
import { IWord } from "../../store/models/Interfaces";

const MyVocabulary = () => {
    const { data } = useGetOwnWordsQuery();
  
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
}

export default MyVocabulary;