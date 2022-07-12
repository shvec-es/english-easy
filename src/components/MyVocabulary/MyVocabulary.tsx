import { useGetOwnWordsQuery } from "../../services/ReduxService";
import WordsItem from '../WordsItem';
import { IGetWord } from "../../store/models/Interfaces";

const MyVocabulary = () => {
    const { data } = useGetOwnWordsQuery();
  
  return (
    <>
      {data ? (
      <ul>
          {(data as unknown as IGetWord[]).map((word) => <WordsItem key={word._id} {...word} />)}
        </ul>)
        :
      <div>Loading...</div>}
    </>
  )
}

export default MyVocabulary;