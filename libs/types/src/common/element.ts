import { ReactNode, ComponentPropsWithRef, HTMLAttributes, AriaAttributes, ElementType } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export type ElementProps<E extends ElementType> = ComponentPropsWithRef<E>;
export type ElementRestProps<E> = Partial<HTMLAttributes<E>> & Partial<AriaAttributes>;
