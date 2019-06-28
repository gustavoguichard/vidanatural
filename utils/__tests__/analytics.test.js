import ReactGA from 'react-ga'
import * as subject from 'utils/analytics'

jest.mock('react-ga', () => ({
  initialize: jest.fn(),
  set: jest.fn(),
  pageview: jest.fn(),
}))

describe('initGA', () => {
  it('initializes GA', () => {
    subject.initGA()
    expect(ReactGA.initialize).toBeCalled()
  })
})

describe('logPageView', () => {
  it('logs the page location to GA', () => {
    subject.logPageView()
    expect(ReactGA.set).toBeCalledWith({ page: '/' })
    expect(ReactGA.pageview).toBeCalledWith('/')
  })
})
