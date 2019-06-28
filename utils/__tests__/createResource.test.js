import { Img, ImgResource } from 'utils/createResource'
import { render } from '@testing-library/react'

jest.mock('react-cache', () => ({
  unstable_createResource: jest.fn(value => ({
    read: jest.fn(() => Promise.resolve(value)),
  })),
}))

const oldBrowser = process.browser

beforeAll(() => {
  process.browser = true
})

afterAll(() => {
  process.browser = oldBrowser
})

describe('ImgResource', () => {
  it('creates a resource and returns a Promise', async () => {
    const promise = await ImgResource.read({ src: 'foo' })
    const result = promise('foo')
    expect(result).toMatchObject({})
  })
})

describe('Img', () => {
  it('returns an image and calls ImgResource', async () => {
    ImgResource.read.mockClear()
    const image = await render(<Img src="foo" />)
    expect(ImgResource.read).toBeCalled()
    expect(image).toMatchObject({})
  })
})
