import React, { useReducer } from 'react';

const useDropDown = () => {
  const [open, toggleOpen] = useReducer((v) => !v, false);

  return [open, toggleOpen];
};

export default useDropDown;
