import React from "react";
import { Button } from "@mantine/core";
import { Database } from "tabler-icons-react";

interface propsType {
  title: string;
}
const ActionButton = (props: propsType) => {
  const { title } = props;

  return (
    <Button color="red" size={"xs"} leftIcon={<Database size={14} />}>
      {title}
    </Button>
  );
};

export default ActionButton;
