import type { Ref } from 'react';
import type { GestureResponderEvent } from 'react-native';

export type ComponentRef = Ref<any>;

let collection: { ref: ComponentRef; cb: () => void }[] = [];

export let isTouch: boolean | undefined;
export const setIsTouch = (value: boolean) => (isTouch = value);

export const onTouch = (event: GestureResponderEvent) => {
  if (!isTouch) return;
  const { pageX, pageY } = event.nativeEvent;
  collection.forEach((item) => {
    // @ts-ignore
    item.ref?.current?.measure((_x, _y, width: number, height: number, x: number, y: number) => {
      if (pageX < x || pageX > x + width || pageY < y || pageY > y + height) item.cb();
    });
  });
  isTouch = undefined;
};

export const register: (ref: ComponentRef, cb: () => void) => void = (ref, cb) => {
  if (collection.find((c) => c.ref === ref)) return;
  collection.push({ ref, cb });
};

export const unregister: (ref: ComponentRef) => void = (refToRemove) =>
  (collection = collection.filter(({ ref }) => ref !== refToRemove));
