import { useState } from "react";

export const useToggle = (currentValue: boolean | undefined = false) => {
  const [value, setValue] = useState(currentValue);

  return {
    value,
    onToggle: () => setValue(!value),
    onSet: () => setValue(true),
    onUnset: () => setValue(false),
  };
};
