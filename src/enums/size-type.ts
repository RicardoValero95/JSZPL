import { Values } from '.'
export const SizeType = {
  Absolute: 0, // exact size
  Fraction: 1, // size as part of parent
  Relative: 2 // size together with siblings as part of parent
} as const
export type SizeType = Values<typeof SizeType>
