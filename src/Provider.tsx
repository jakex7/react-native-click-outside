import React, { FC } from 'react';
import { GestureResponderEvent, Platform, StyleSheet, View } from 'react-native';
import { onTouch, setIsTouch } from './utils/collection';
import { isInRange } from './utils/helpers';

type ClickOutsideProviderProps = {
  activateOnSwipe?: boolean;
  swipeThreshold?: number;
};

let touchX: number | undefined;
let touchY: number | undefined;
export const ClickOutsideProvider: FC<ClickOutsideProviderProps> = ({
  children,
  activateOnSwipe,
  swipeThreshold = 8,
}) => (
  <View
    style={styles.flex}
    onTouchEnd={(e) => {
      if (!touchX) touchX = e.nativeEvent.changedTouches[0]?.pageX;
      if (!touchY) touchY = e.nativeEvent.changedTouches[0]?.pageY;
      if (!e.nativeEvent.changedTouches[0] || !touchX || !touchY) return;
      if (
        isInRange(e.nativeEvent.changedTouches[0]?.pageX, touchX, swipeThreshold) &&
        isInRange(e.nativeEvent.changedTouches[0]?.pageY, touchY, swipeThreshold)
      )
        setIsTouch(true);
      else if (activateOnSwipe) setIsTouch(true);
      else setIsTouch(false);
      onTouch(e);
      touchX = undefined;
      touchY = undefined;
    }}
    onTouchStart={(e) => {
      touchX = e.nativeEvent.changedTouches[0]?.pageX;
      touchY = e.nativeEvent.changedTouches[0]?.pageY;
      setIsTouch(true);
    }}
    {...(Platform.OS === 'web' && {
      onClick: (e: GestureResponderEvent) => {
        setIsTouch(true);
        onTouch(e);
      },
    })}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
