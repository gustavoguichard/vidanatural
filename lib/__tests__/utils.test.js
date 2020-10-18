import * as subject from '../utils'

describe('Utils', () => {
  describe('classes', () => {
    it('should accept one or many arguments', () => {
      expect(subject.classes('foo', 'bar')).toBe('foo bar')
      expect(subject.classes('foo')).toBe('foo')
    })

    it('should accept arrays', () => {
      expect(subject.classes(['foo', 'bar'])).toBe('foo bar')
      expect(subject.classes('foo', ['bar'])).toBe('foo bar')
    })

    it('should filter falsy values', () => {
      expect(subject.classes([false, 'bar'])).toBe('bar')
      expect(subject.classes(false, ['bar'])).toBe('bar')
      expect(subject.classes(null, ['bar'])).toBe('bar')
      expect(subject.classes(undefined, ['bar'])).toBe('bar')
      expect(subject.classes('', ['bar'])).toBe('bar')
      expect(subject.classes([], ['bar'])).toBe('bar')
    })

    it('should accept objects and return their keys if value is truthy', () => {
      expect(
        subject.classes({ foo: true, bar: 'yes', buzz: false }, 'fizz'),
      ).toBe('foo bar fizz')
      expect(subject.classes([{ foo: true, buzz: false }], false, 'bar')).toBe(
        'foo bar',
      )
    })
  })
})
