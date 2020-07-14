import * as subject from '../utils'

describe('Carousel utils', () => {
  const el = {
    getBoundingClientRect: () => ({ width: 300 }),
    scroll: jest.fn(),
  }

  describe('widthInPixels', () => {
    it('returns the width in pixels if the width is a percentage', () => {
      expect(subject.widthInPixels(100, el)).toMatchObject({ width: 100 })
      expect(subject.widthInPixels('33%', el)).toMatchObject({ width: 99 })
      expect(subject.widthInPixels(100, null)).toMatchObject({
        width: 100,
        containerWidth: 100,
      })
    })
  })

  describe('scrollToPage', () => {
    it('smoothly scrolls an element to exact page position', () => {
      subject.scrollToPage(el, 100, 2, 3)
      expect(el.scroll).toHaveBeenCalledWith({ behavior: 'smooth', left: 600 })
    })
  })

  describe('calculatePages', () => {
    it('returns the ', () => {
      expect(subject.calculatePages(10, 120)(el)).toEqual({
        perPage: 2,
        total: 5,
      })
    })
  })
})
