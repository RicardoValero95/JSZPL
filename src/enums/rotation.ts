import { Values } from '.'
export const Rotation = {
  Normal: 'N',
  Right: 'R',
  Bottom: 'I',
  Left: 'B'
} as const
export type Rotation = Values<typeof Rotation>
