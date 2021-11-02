import { Values } from '.'
export const PrintDensityName = {
  '6dpmm': 6,
  '8dpmm': 8,
  '12dpmm': 12,
  '24dpmm': 24
} as const
export type PrintDensityName = Values<typeof PrintDensityName>
