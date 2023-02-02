import type { PropsWithChildren, Dispatch } from "react";

// /////////////////////////////////////////////////////////////////////////////////////////////////
// React
// /////////////////////////////////////////////////////////////////////////////////////////////////
export interface CmpProps {
  className?: string;
}
export interface CmpPropsWithChildren extends CmpProps, PropsWithChildren {}

export type SetStateFn<T> = Dispatch<React.SetStateAction<T>>;
