import { Pagination } from "@mantine/core";

interface propsType {
  total: number;
  pageChange: Function;
}
function PaginationComponent(props: propsType) {
  const { total, pageChange } = props;

  return (
    <Pagination
      onChange={(page) => {
        console.log("PAGE", page);
        pageChange(page);
      }}
      total={Math.ceil(total / 4)}
      color="cyan"
      radius="xl"
      withControls={false}
    />
  );
}
export default PaginationComponent;
