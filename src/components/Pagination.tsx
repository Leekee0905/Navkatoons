import { PageObjType } from "@/app/webtoons/page";
import { CustomPaginate } from "@/styles/Pagination";
import { Dispatch } from "react";

const Pagination = ({
  page,
  setPage,
}: {
  page: PageObjType;
  setPage: Dispatch<number>;
}) => {
  const getPageNumber = () => {
    return Math.ceil(page.total / 25);
  };

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
        pageCount={getPageNumber()}
        previousLabel="<"
        activeClassName="active"
        initialPage={0}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
