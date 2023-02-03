import { useCallback, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useFocusEffect = (activeCallback: () => void, inactiveCallback: () => void) => {
  const appState = useRef(AppState.currentState);
  const _handleAppStateChange = useCallback(
    (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        activeCallback();
      }
      if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
        inactiveCallback();
      }
      appState.current = nextAppState;
    },
    [activeCallback, inactiveCallback]
  );
  useEffect(() => {
    const listener = AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      listener.remove();
    };
  }, [_handleAppStateChange]);
};
