import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export const PageBt = ({ onClick, Icon, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className="bg-white bg-opacity-0 p-4 transition duration-300 shadow rounded-full hover:shadow-lg hover:bg-opacity-25 absolute hidden sm:block z-10"
      onClick={onClick}
    >
      <Icon className="text-black text-2xl" />
    </button>
  )
}

export const PrevBt = ({ onClick }) => (
  <PageBt style={{ left: 20 }} onClick={onClick} Icon={FiArrowLeft} />
)

export const NextBt = ({ onClick }) => (
  <PageBt style={{ right: 20 }} onClick={onClick} Icon={FiArrowRight} />
)
