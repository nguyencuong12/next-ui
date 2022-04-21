import { useState, useRef, useEffect } from "react";
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from "@mantine/core";

interface propsType {
  amount: number;
  onChangeAmount: Function;
  id: string;
}
function NumberControl(props: propsType) {
  const { amount, onChangeAmount, id } = props;
  const [value, setValue] = useState(amount);
  const handlers = useRef<NumberInputHandlers>();
  const changeAmount = (val: any) => {
    // (val) => setValue(val!)
    setValue(val!);
  };
  useEffect(() => {
    onChangeAmount(value);
  }, [value]);
  return (
    <Group spacing={5} direction="row" align="flex-start" noWrap={true}>
      <ActionIcon size={30} variant="default" onClick={() => handlers.current?.decrement()}>
        –
      </ActionIcon>
      <NumberInput size={"xs"} hideControls value={value} max={10} min={1} step={1} styles={{ input: { width: 50, textAlign: "center" } }} onChange={changeAmount} handlersRef={handlers} />
      <ActionIcon size={30} variant="default" onClick={() => handlers.current?.increment()}>
        +
      </ActionIcon>
    </Group>
  );
}
export default NumberControl;
