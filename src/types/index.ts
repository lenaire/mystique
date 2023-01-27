import type { PropsWithChildren, ReactElement, Dispatch } from "react";

// /////////////////////////////////////////////////////////////////////////////////////////////////
// React
// /////////////////////////////////////////////////////////////////////////////////////////////////
export type CmpReturn = ReactElement | null;

export type CmpProps<T = unknown> = { className?: string } & T;

export type CmpPropsWithChildren = CmpProps<PropsWithChildren>;

export type SetStateFn<T> = Dispatch<React.SetStateAction<T>>;
