import React from 'react'
import { getItemWidth, getBaseStyles } from '../scroller'

describe('HorizontalScroller helper functions', () => {
  describe('getItemWidth', () => {
    it(`appends 'px' to the end of width when is not a percentage or 'auto'`, () => {
      expect(getItemWidth(100)).toBe('100px')
      expect(getItemWidth('100')).toBe('100px')
      expect(getItemWidth('100%')).toBe('100%')
      expect(getItemWidth('auto')).toBe('auto')
    })
  })

  describe('getBaseStyles', () => {
    const children = [...Array(4).keys()].map((i) => <div key={i} />)
    it('creates a grid template depending on the number of children', () => {
      expect(getBaseStyles(children, null, '25%', 8)).toEqual({
        display: 'grid',
        gridColumnGap: 8,
        gridTemplateColumns: 'repeat(4, 25%)',
      })
    })

    it('returns flex rules when flex is true', () => {
      expect(getBaseStyles(children, true, '25%', 8)).toEqual({
        display: 'flex',
        flexWrap: 'nowrap',
      })
    })
  })
})
