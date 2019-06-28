import * as subject from 'utils/responsive'

let oldBrowser = process.browser
let oldPixelRatio = window.devicePixelRatio

beforeAll(() => {
  process.browser = true
})
afterEach(() => {
  navigator.__defineGetter__('userAgent', () => 'Chrome')
})
afterAll(() => {
  process.browser = oldBrowser
  window.devicePixelRatio = oldPixelRatio
})

describe('isRetina', () => {
  it('returns false when devicePixelRatio is not significant', () => {
    expect(subject.isRetina()).toBe(false)
  })

  it('returns true when devicePixelRatio is significant', () => {
    window.devicePixelRatio = 2
    expect(subject.isRetina()).toBe(true)
  })
})

describe('isMobile', () => {
  it('returns true when userAgent is within some', () => {
    navigator.__defineGetter__('userAgent', () => 'iPhone')
    expect(subject.isMobile()).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(subject.isMobile()).toBe(false)
  })
})

describe('isTablet', () => {
  it('returns true when userAgent is mobile or iPad', () => {
    navigator.__defineGetter__('userAgent', () => 'iPad')
    expect(subject.isTablet()).toBe(true)
  })

  it('returns false otherwise', () => {
    expect(subject.isTablet()).toBe(false)
  })
})

describe('isDesktop', () => {
  it('returns true userAgent is not any of the previous', () => {
    expect(subject.isDesktop()).toBe(true)
  })

  it('returns false otherwise', () => {
    navigator.__defineGetter__('userAgent', () => 'iPad')
    expect(subject.isDesktop()).toBe(false)
  })
})
