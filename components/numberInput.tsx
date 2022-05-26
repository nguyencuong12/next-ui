import { useState, useRef, useEffect } from "react";
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from "@mantine/core";
import CartEvents from "../utils/storage";

interface propsType {
  amount: number;
  id: string;
}

function NumberControl(props: propsType) {
  const { amount, id } = props;

  const [value, setValue] = useState(amount);
  const handlers = useRef<NumberInputHandlers>();
  const onChangeAmount = (value: number) => {
    console.log("VALUE", value);
    let updateOptions = {
      amount: value,
      id: id,
    };
    CartEvents.update(updateOptions);
  };

  return (
    <Group spacing={0} direction="row" align="flex-start" noWrap={true}>
      <ActionIcon size={30} variant="default" onClick={() => handlers.current?.decrement()} style={{ marginRight: "5px" }}>
        –
      </ActionIcon>
      <NumberInput size={"xs"} hideControls value={value} max={10} min={1} step={1} styles={{ input: { width: 50, textAlign: "center" } }} onChange={onChangeAmount} handlersRef={handlers} />
      <ActionIcon size={30} variant="default" onClick={() => handlers.current?.increment()} style={{ marginLeft: "5px" }}>
        +
      </ActionIcon>
    </Group>
  );
}
export default NumberControl;
