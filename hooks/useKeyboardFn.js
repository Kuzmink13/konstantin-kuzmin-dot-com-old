/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

import { useCallback, useEffect } from 'react';

export default function useKeyboardFn(callback, keyArray = undefined) {
  const isKeyPressed = useCallback(
    (key) => {
      if (!keyArray) return true;
      return keyArray.reduce((acc, cur) => acc || cur === key, false);
    },
    [keyArray]
  );

  const callFn = useCallback(
    (event) => {
      if (event.repeat) return;
      isKeyPressed(event.key) && callback(event);
    },
    [isKeyPressed, callback]
  );

  useEffect(() => {
    document.addEventListener('keydown', callFn);
    return () => {
      document.removeEventListener('keydown', callFn);
    };
  }, [callFn]);

  return [];
}
