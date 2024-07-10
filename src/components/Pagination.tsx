import { PageObjType } from "@/app/webtoons/page";
import { CustomPaginate } from "@/styles/Pagination";
import { Dispatch, useEffect, useState } from "react";

const Pagination = ({
  page,
  setPage,
  nowPage,
}: {
  page: PageObjType;
  setPage: Dispatch<number>;
  nowPage: number;
}) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const getPageNumber = () => {
    return Math.ceil(page.total / 25);
  };
  console.log(page, nowPage, Math.ceil(page.total / 25));

  useEffect(() => {
    setPageNumber(getPageNumber());
  }, [page]);
  const handlePageClick = (event: any) => {
    setPage(event.selected);
  };

  return (
    <>
      <CustomPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageNumber}
        previousLabel="<"
        activeClassName="active"
        initialPage={0}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
