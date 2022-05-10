import React, { useContext } from "react";
import { Button } from "@mantine/core";
import { Icon, ShoppingCart } from "tabler-icons-react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

interface propsType {
  title: string;
  onClick?: Function;
  fullWidth?: boolean;
  IconCustom: Icon;
}

const TitleWrapper = styled.div`
  font-size: 12px;
`;

const ActionButton = (props: propsType) => {
  const themeContext = useContext(ThemeContext);

  const { title, onClick, fullWidth, IconCustom } = props;

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
      leftIcon={<IconCustom size={14} />}
      sx={(theme) => ({
        color: "#000",
        backgroundColor: themeContext.accent,
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      <TitleWrapper> {title}</TitleWrapper>
    </Button>
  );
};

export default ActionButton;
