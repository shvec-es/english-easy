import { useGetOwnWordsQuery } from "../../services/ReduxService";
import Table from "../Table/TableList/Table";

const MyVocabulary = () => {
  const { data } = useGetOwnWordsQuery();

  return data ? <Table words={data} /> : <div>Loading...</div>;
};

export default MyVocabulary;
