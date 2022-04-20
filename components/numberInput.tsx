import { useState, useRef } from "react";
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from "@mantine/core";

function NumberControl() {
  const [value, setValue] = useState(0);

  return (
    <Group spacing={5} direction="row" align="flex-start" noWrap={true}>
      <ActionIcon size={30} variant="default">
        –
      </ActionIcon>
      <NumberInput size={"xs"} hideControls value={value} max={10} min={0} step={1} styles={{ input: { width: 50, textAlign: "center" } }} />
      <ActionIcon size={30} variant="default">
        +
      </ActionIcon>
    </Group>
  );
}
export default NumberControl;
