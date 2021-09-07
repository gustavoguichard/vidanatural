import '@testing-library/jest-dom/extend-expect'

Object.defineProperty(window, 'localStorage', { value: localStorageMock() })
Object.defineProperty(window, 'sessionStorage', { value: localStorageMock() })

const realLocation = window.location

beforeEach(() => {
  jest.resetAllMocks()
  delete window.location
  window.location = new URL('http://dummy.com')
})
afterEach(() => {
  window.localStorage.clear()
  window.sessionStorage.clear()
  window.location = realLocation
})

function localStorageMock() {
  let store = {}
  return {
    clear: jest.fn(() => {
      store = {}
    }),
    getItem: jest.fn((key) => store[key] || null),
    removeItem: jest.fn((key) => {
      delete store[key]
    }),
    setItem: jest.fn((key, value) => {
      store[key] = value ? value.toString() : ''
    }),
  }
}
