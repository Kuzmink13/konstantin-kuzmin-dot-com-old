/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import { useState } from 'react';

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggleState = (newState = undefined) => {
    newState === undefined
      ? setState((prevState) => !prevState)
      : setState(newState);
  };

  const resetState = () => {
    setState(initialState);
  };

  return [state, toggleState, resetState];
}
