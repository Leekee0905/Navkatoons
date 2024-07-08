import { CustomPaginate } from "@/styles/Pagination";

const Pagination = ({ page, setPage, week, service }: any) => {
  //const [itemOffset, setItemOffset] = useState(0);
  //const endOffset = itemOffset + itemsPerPage;
  //const currentItems = items.slice(itemOffset, endOffset);
  const getPageCount = (week: string, service: string): number => {
    switch (service) {
      case "naver":
        switch (week) {
          case "all":
            return 97;
          case "finished":
            return 66;
          default:
            return 4;
        }
      case "kakao":
        switch (week) {
          case "all":
            return 78;
          case "finished":
            return 40;
          case "sun":
            return 5;
          default:
            return 6;
        }
      case "kakaoPage":
        switch (week) {
          case "all":
            return 101;
          case "finished":
            return 44;
          case "mon":
          case "sun":
            return 8;
          case "wed":
          case "sat":
            return 9;
          case "fri":
            return 11;
          default:
            return 10;
        }
      default:
        return page;
    }
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
        pageCount={getPageCount(week, service)}
        previousLabel="<"
        activeClassName="active"
        initialPage={0}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
