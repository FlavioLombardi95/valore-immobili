import { describe, it, expect } from 'vitest'
import { parseCsv } from './csvParse.js'

describe('parseCsv', () => {
  it('parses simple comma-separated lines', () => {
    const csv = 'a,b,c\n1,2,3'
    expect(parseCsv(csv)).toEqual([
      ['a', 'b', 'c'],
      ['1', '2', '3'],
    ])
  })

  it('handles quoted fields with commas', () => {
    const csv = 'Nome,Città\n"Rossi, Mario",Monza'
    expect(parseCsv(csv)).toEqual([
      ['Nome', 'Città'],
      ['Rossi, Mario', 'Monza'],
    ])
  })

  it('handles empty lines', () => {
    const csv = 'a,b\n\nc,d'
    expect(parseCsv(csv)).toEqual([['a', 'b'], ['c', 'd']])
  })

  it('trims cells', () => {
    const csv = '  x  ,  y  '
    expect(parseCsv(csv)).toEqual([['x', 'y']])
  })
})
