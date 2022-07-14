import { useGetOwnWordsQuery } from "../../services/ReduxService";
import Table from "../Table/TableList/Table";
import { IWord } from "../../store/models/Interfaces";

const MyVocabulary = () => {
  const { data }: IWord[] | any = useGetOwnWordsQuery();

  return <>{data ? <Table words={data} />: <div>Loading...</div>}</>;
};

export default MyVocabulary;
