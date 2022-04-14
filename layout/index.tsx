import React from "react";

interface propsType {
  children: React.ReactNode;
}
const MainLayout = (props: propsType) => {
  return <div>{props.children}</div>;
};

export default MainLayout;
