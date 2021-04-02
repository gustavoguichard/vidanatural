import * as subject from '../utils'

describe('Carousel utils', () => {
  const el = {
    getBoundingClientRect: () => ({ width: 300 }),
    children: [{ getBoundingClientRect: () => ({ width: 120 }) }],
    scroll: jest.fn(),
  }

  describe('widthInPixels', () => {
    it("returns the width in pixels based on container's first child", () => {
      expect(subject.widthInPixels(el)).toMatchObject({
        width: 120,
        containerWidth: 300,
      })
      expect(subject.widthInPixels(null)).toMatchObject({
        width: 0,
        containerWidth: 0,
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
      expect(subject.calculatePages(10)(el)).toEqual({
        perPage: 2,
        total: 5,
        width: 120,
      })
    })
  })
})
