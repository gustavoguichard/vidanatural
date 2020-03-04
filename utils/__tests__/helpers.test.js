import * as subject from '../helpers.ts'

const oldScroll = window.scroll
const oldGetById = window.document.getElementById

beforeAll(() => {
  window.scroll = jest.fn()
})
afterEach(() => {
  Object.defineProperty(window.document, 'getElementById', {
    writable: true,
    value: oldGetById,
  })
})
afterAll(() => {
  window.scroll = oldScroll
})

describe('nl2Br', () => {
  it('turns new lines into <br />', () => {
    const result = subject.nl2Br(`Foo
      Bar`)
    expect(result).toMatch(/<br \/>/i)
  })
})

describe('smoothScrolling', () => {
  it('scrolls to an element smoothly', () => {
    window.scroll.mockClear()
    subject.smoothScrolling({ offsetTop: 10 })
    expect(window.scroll).toBeCalledWith({
      top: 10,
      left: 0,
      behavior: 'smooth',
    })
  })
})

describe('scrollToId', () => {
  it('scrolls to an element smoothly given its id', () => {
    window.scroll.mockClear()
    Object.defineProperty(window.document, 'getElementById', {
      writable: true,
      value: jest.fn(() => ({ offsetTop: 30 })),
    })
    subject.scrollToId('foo')
    expect(window.scroll).toBeCalledWith({
      top: 30,
      left: 0,
      behavior: 'smooth',
    })
  })

  it('scrolls to 0 if no element is found', () => {
    window.scroll.mockClear()
    subject.scrollToId('bar')
    expect(window.scroll).toBeCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })
})

describe('callAll', () => {
  it('calls many functions with same arguments', () => {
    const foo = jest.fn()
    const bar = jest.fn()
    const zaz = 'foo'
    subject.callAll(foo, bar, zaz)(10, 5)
    expect(foo).toBeCalledWith(10, 5)
    expect(bar).toBeCalledWith(10, 5)
  })
})

describe('callIf', () => {
  it('calls a function if condition passes', () => {
    const foo = jest.fn()
    subject.callIf(true, foo)(10)
    subject.callIf(false, foo)(10)
    expect(foo).toBeCalledWith(10)
    expect(foo).toHaveBeenCalledTimes(1)
  })
})

describe('callDeep', () => {
  it('calls a deep function in an object', () => {
    const foo = { bar: { zaz: jest.fn((val, val2) => val + val2) } }
    const result = subject.callDeep(foo, 'bar.zaz')(10, 5)
    expect(foo.bar.zaz).toBeCalledWith(10, 5)
    expect(result).toBe(15)
  })

  it('calls own object if there is no path', () => {
    const foo = jest.fn(value => value + 1)
    const result = subject.callDeep(foo)(10)
    expect(result).toBe(11)
  })

  it('returns undefined if there is no such function', () => {
    const foo = { bar: { zaz: 'foo' } }
    const result = subject.callDeep(foo, 'bar.zaz')(10, 5)
    expect(result).toBe(undefined)
  })
})

describe('sleep', () => {
  it('hangs for given time', async () => {
    const promise = subject.sleep(1)
    expect(promise).toMatchObject({})
    const result = await subject.sleep(1)
    expect(result).toBe(undefined)
  })
})
