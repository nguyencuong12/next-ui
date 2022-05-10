import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

function LoadingOver() {
  // Note that position: relative is required
  return (
    <>
      <LoadingOverlay visible={true} />
      {/* ...other content */}
    </>
  );
}
export default LoadingOver;
