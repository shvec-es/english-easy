import { useGetWordsQuery } from "../../services/ReduxService";
import { IWord } from "../../store/models/Interfaces";
import Table from "../Table/TableList/Table";

const AllWords = () => {
  const { data }: IWord[] | any = useGetWordsQuery();

  return <>{data ? <Table words={data} /> : <div>Loading...</div>}</>;
};

export default AllWords;
