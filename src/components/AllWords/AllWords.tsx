import { useGetWordsQuery } from "../../services/ReduxService";
import Table from "../Table/TableList/Table";

const AllWords = () => {
  const { data } = useGetWordsQuery();

  return data ? <Table words={data} /> : <div>Loading...</div>;
};

export default AllWords;
