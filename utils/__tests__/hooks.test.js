import { cleanup, getNodeText, fireEvent } from '@testing-library/react'
import identity from 'lodash/identity'

import { element, getResultValue, getResultNode, clickEl } from 'test/utils'
import { sleep } from 'utils/helpers'
import * as subject from 'utils/hooks'

const oldWidth = window.innerWidth

afterEach(cleanup)
afterAll(() => {
  window.innerWidth = oldWidth
})

describe('useWindowDimensions', () => {
  const Component = () => {
    const { width } = subject.useWindowDimensions(4)
    return element(width)
  }

  it('returns the window dimensions', () => {
    const value = getResultValue(<Component />)
    expect(value).toBe('1024')
  })

  it('listens to the window resize with throttle', async () => {
    const { el, rerender } = getResultNode(<Component />)
    window.innerWidth = 800
    fireEvent(window, new Event('resize'))
    rerender(<Component />)
    expect(getNodeText(el)).toBe('1024')
    await sleep(4)
    rerender(<Component />)
    expect(getNodeText(el)).toBe('800')
  })
})

describe('useMedia', () => {
  const Component = ({ media = 'desktop' }) => {
    const bool = subject.useMedia(media)
    return element(bool)
  }
  window.matchMedia = jest.fn(() => ({
    addListener: jest.fn(),
    removeListener: jest.fn(),
    matches: true,
  }))

  it('returns a boolean', () => {
    const value = getResultValue(<Component />)
    expect(value).toBe('true')
  })

  it('accepts some predefined values', () => {
    window.matchMedia.mockClear()
    getResultNode(<Component />)
    expect(window.matchMedia).toHaveBeenCalledWith('(min-device-width: 992px)')
  })

  it('falls back to passed value', () => {
    window.matchMedia.mockClear()
    getResultNode(<Component media="foo" />)
    expect(window.matchMedia).toHaveBeenCalledWith('foo')
  })
})

describe('useProcessOnce', () => {
  it('returns the value of current ref', () => {
    const Component = ({ value, fn }) => {
      const result = subject.useProcessOnce(fn, value)
      return element(result)
    }
    const { el, rerender } = getResultNode(
      <Component value="foo" fn={identity} />,
    )
    expect(getNodeText(el)).toBe('')
    rerender(<Component value="bar" fn={identity} />)
    expect(getNodeText(el)).toBe('foo')
  })
})

describe('useMounted', () => {
  const Component = () => {
    const result = subject.useMounted()
    return element(result)
  }
  it('returns true when component is mounted', () => {
    const value = getResultValue(<Component />)
    expect(value).toBe('true')
  })

  // it('returns false when component is not yet mounted', () => {
  //   const { getByTestId } = render(<Component />)
  //   const el = getByTestId('test-el')
  //   expect(getNodeText(el)).toBe('false')
  // })
})

describe('useToggle', () => {
  const Component = ({ initial }) => {
    const [result, fn] = subject.useToggle(initial)
    return element(result, fn)
  }

  it('returns toggled state', () => {
    const { el } = getResultNode(<Component />)
    expect(getNodeText(el)).toBe('false')
    clickEl(el)
    expect(getNodeText(el)).toBe('true')
  })

  it('accepts an initial value', () => {
    const { el } = getResultNode(<Component initial />)
    expect(getNodeText(el)).toBe('true')
    clickEl(el)
    expect(getNodeText(el)).toBe('false')
  })
})

describe('useHtmlClass', () => {
  const Component = ({ className, condition }) => {
    const result = subject.useHtmlClass(className, condition)
    return element(result)
  }

  it('toggles a class in the Html element', () => {
    const add = jest.spyOn(document.documentElement.classList, 'add')
    const remove = jest.spyOn(document.documentElement.classList, 'remove')
    const { el, rerender, rerenderTwice } = getResultNode(
      <Component className="is-open" condition />,
    )
    rerender(<Component className="is-open" condition />)
    expect(getNodeText(el)).toBe('')
    expect(add).toHaveBeenCalledWith('is-open')
    add.mockClear()
    rerenderTwice(<Component className="is-open" condition={false} />)
    expect(remove).toHaveBeenCalledWith('is-open')
  })
})
