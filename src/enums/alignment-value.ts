import { Values } from '.'
export const AlignmentValue = {
  Start: 'Start',
  Center: 'Center',
  End: 'End'
} as const
export type AlignmentValue = Values<typeof AlignmentValue>
