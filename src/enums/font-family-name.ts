import { Values } from '.'
export const FontFamilyName = {
  A: 'A',
  B: 'B',
  D: 'D',
  E: 'E',
  F: 'F'
  // G: 'G'
  // H : 'H',
  // 0 : '0',
  // GS : 'GS',
  // P : 'P',
  // Q : 'Q',
  // R : 'R',
  // S : 'S',
  // T : 'T',
  // U : 'U',
  // V : 'V'
} as const
export type FontFamilyName = Values<typeof FontFamilyName>
