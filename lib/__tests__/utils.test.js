import * as subject from '../utils.ts'

describe('Utils', () => {
  describe('cx', () => {
    it('should accept one or many arguments', () => {
      expect(subject.cx('foo', 'bar')).toBe('foo bar')
      expect(subject.cx('foo')).toBe('foo')
    })

    it('should accept arrays', () => {
      expect(subject.cx(['foo', 'bar'])).toBe('foo bar')
      expect(subject.cx('foo', ['bar'])).toBe('foo bar')
    })

    it('should filter falsy values', () => {
      expect(subject.cx([false, 'bar'])).toBe('bar')
      expect(subject.cx(false, ['bar'])).toBe('bar')
      expect(subject.cx(null, ['bar'])).toBe('bar')
      expect(subject.cx(undefined, ['bar'])).toBe('bar')
      expect(subject.cx('', ['bar'])).toBe('bar')
      expect(subject.cx([], ['bar'])).toBe('bar')
    })

    it('should accept && and || expressions', () => {
      const yup = true
      const nope = false
      expect(
        subject.cx(yup && 'foo', nope && 'bar', yup || 'fizz', nope || 'buzz'),
      ).toBe('foo buzz')
    })
  })
})
