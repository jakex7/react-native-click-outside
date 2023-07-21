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
  callbackRef.current = callback;
  const callbackRegisterWrapper = () => callbackRef.current();

  const ref = React.useRef<T>(null);

  useFocusEffect(
    () => {
      if (config?.triggerOnBlur === false) return;
      register(ref, callbackRegisterWrapper);
    },
    () => {
      if (config?.triggerOnBlur === false) return;
      callbackRegisterWrapper();
      unregister(ref);
    }
  );
  React.useEffect(() => {
    register(ref, callbackRegisterWrapper);
    return () => {
      unregister(ref);
      if (config?.triggerOnUnmount === false) return;
      callbackRegisterWrapper();
    };
  }, [config?.triggerOnUnmount]);

  return ref;
};
