import React from 'react'

import { useToggle } from 'lib/hooks'
import { cx } from 'lib/utils'

import CTAButton from 'components/cta-button'

const Description = ({ product }) => {
  const [isOpen, toggle] = useToggle()
  return (
    <div className="w-full border-t-8 border-white">
      <div className="max-w-screen-xl p-10 mx-auto" id="descricao">
        <div className="justify-center text-gray-600 md:space-x-4 md:flex">
          <div className="md:w-8/12">
            <h3 className="mb-2 text-2xl font-semibold">Informações</h3>
            <div
              className={cx(
                'prose prose-secondary transition duration-500 overflow-hidden',
                isOpen || 'max-h-[300px]',
              )}
              dangerouslySetInnerHTML={{
                __html: product.description.information,
              }}
            />
            {isOpen || (
              <>
                <div className="relative z-10 h-20 mb-4 -mt-20 pointer-events-none bg-gradient-to-t from-gray-50" />
                <CTAButton mini onClick={toggle}>
                  Ler mais
                </CTAButton>
              </>
            )}
          </div>
          {product.description.specifications && (
            <div className="md:w-4/12">
              <hr className="my-6 border-t-2 border-gray-200 md:hidden" />
              <h3 className="mb-2 text-2xl font-semibold">Especificações</h3>
              <div
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: product.description.specifications,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Description
