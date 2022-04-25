import React, { useContext } from "react";
import { Button } from "@mantine/core";
import { Database } from "tabler-icons-react";
import { ThemeContext } from "styled-components";

interface propsType {
  title: string;
  onClick?: Function;
  fullWidth?: boolean;
}
const ActionButton = (props: propsType) => {
  const themeContext = useContext(ThemeContext);

  const { title, onClick, fullWidth } = props;

  return (
    <Button
      color="red"
      fullWidth={fullWidth}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      size={"xs"}
      leftIcon={<Database size={14} />}
      sx={(theme) => ({
        color: "#000",
        backgroundColor: themeContext.accent,
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      {title}
    </Button>
  );
};

export default ActionButton;
