import React from 'react';
import type { View } from 'react-native';
import { register, unregister } from './utils/collection';
import { useFocusEffect } from './useFocusEffect';

type HookConfig = {
  triggerOnUnmount?: boolean;
  triggerOnBlur?: boolean;
};

export const useClickOutside = <T = View>(callback: () => void, config?: HookConfig): React.RefObject<T> => {
  const callbackRef = React.useRef(callback);
  const ref = React.useRef<T>(null);

  useFocusEffect(
    () => {
      if (config?.triggerOnBlur === false) return;
      register(ref, callbackRef.current);
    },
    () => {
      if (config?.triggerOnBlur === false) return;
      callbackRef.current();
      unregister(ref);
    }
  );
  React.useEffect(() => {
    register(ref, callbackRef.current);
    return () => {
      unregister(ref);
      if (config?.triggerOnUnmount === false) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      callbackRef.current();
    };
  }, [config?.triggerOnUnmount]);

  return ref;
};
