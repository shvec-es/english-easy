import { useState } from "react";
import { Pagination, TablePagination } from "@mui/material";
import { useGetWordsQuery } from "../../services/ReduxService";
import { IWord } from "../../store/models/Interfaces";
import Table from "../Table/TableList/Table";

const AllWords = () => {
  const [page, setPage] = useState<number>(1);
  // const [limit, setLimit] = useState<number>(10);
  const { data }: IWord[] | any = useGetWordsQuery({ page, limit: 10 });

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };
  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   console.log(page, newPage);
  //   setPage(newPage);
  // };

  // const handleChangeLimit = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setLimit(parseInt(event.target.value));
  //   setPage(1);
  // };

  return (
    <>
      {data ? (
        <>
          <Table words={data.words} />
          <Pagination
            count={data.total.totalPages}
            page={page}
            shape="rounded"
            onChange={handleChangePage}
            sx={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          />
          {/* <TablePagination
            component="div"
            count={data.total.totalWords}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            onRowsPerPageChange={handleChangeLimit}
            labelRowsPerPage="Words per page"
            rowsPerPageOptions={[10, 15, 25]}
          /> */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AllWords;
