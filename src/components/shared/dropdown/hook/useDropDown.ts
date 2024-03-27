import { useReducer, useState } from 'react';

const useDropDown = () => {
  const [open, toggleOpen] = useReducer((v) => !v, false);
  const [value, setValue] = useState<string | undefined>();
  //
  return [open, toggleOpen, value, setValue] as const;
};

export default useDropDown;
