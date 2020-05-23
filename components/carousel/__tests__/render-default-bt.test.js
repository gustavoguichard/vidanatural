import React from 'react'
import { render, screen } from '@testing-library/react'
import renderDefaultBt from '../render-default-bt'
import { PrevBt } from '../buttons'

describe('renderDefaultBt', () => {
  it('returns nothing when CustomButton is false', () => {
    expect(renderDefaultBt(false)).toBeNull()
  })

  it('returns a default component when CustomButton is undefined', () => {
    const onClick = jest.fn()
    const result = renderDefaultBt(undefined, onClick, PrevBt)
    render(result)
    const button = screen.getByRole('button')
    expect(button.classList).toContain('MuiButtonBase-root')
  })

  it('returns the given Button otherwise', () => {
    const onClick = jest.fn()
    const result = renderDefaultBt(
      <div className="custom">Foo</div>,
      onClick,
      PrevBt,
    )
    render(result)
    const button = screen.getByText('Foo')
    expect(button.classList).toContain('custom')
  })
})
