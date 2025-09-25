import { useState } from "react";

export default function Slider({
  onChange,
  MIN,
  MAX,
  STEP,
}: {
  onChange: (value: number) => void;
  MIN: number;
  MAX: number;
  STEP: number;
}) {
  const [value, setValue] = useState(MIN);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const value = +target.value;

    setValue(value);
    onChange(value);
  }

  return (
    <>
      <span>{MIN}</span>
      <input
        id="delaySlider"
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={value}
        onChange={onChangeHandler}
      />
      <span>{MAX}</span>
      <span
        style={{ color: "orange", fontStyle: "italic", fontWeight: "bold" }}
      >
        {value}
      </span>
    </>
  );
}
