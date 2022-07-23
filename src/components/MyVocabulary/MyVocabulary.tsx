import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { useGetOwnWordsQuery } from "../../services/ReduxService";
import Table from "../Table/TableList/Table";
import {IWords} from "../../store/models/Interfaces";

const MyVocabulary = () => {
  const [page, setPage] = useState<number>(1);
  // const [limit, setLimit] = useState<number>(10);
  const { data } = useGetOwnWordsQuery({ page, limit: 10 });

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <>
      {data ? (
        <>
          <Table words={data} />
          <Pagination
            count={data.total.totalPages}
            page={page}
            shape="rounded"
            onChange={handleChangePage}
            sx={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MyVocabulary;
