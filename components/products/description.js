import { useToggle } from 'lib/hooks'

import CTAButton from 'components/cta-button'

const Description = ({ product }) => {
  const [isOpen, toggle] = useToggle()
  return (
    <div
      className="max-w-screen-xl border-t-8 border-white p-10"
      id="descricao"
    >
      <div className="text-gray-600 md:space-x-4 md:flex justify-center">
        <div className="md:w-8/12">
          <h3 className="mb-2 text-2xl font-semibold">Informações</h3>
          <div
            className="rich-text transition duration-500 overflow-hidden"
            css={{ maxHeight: isOpen ? 'auto' : 300 }}
            dangerouslySetInnerHTML={{
              __html: product.description.information,
            }}
          />
          {isOpen || (
            <>
              <div className="bg-gradient-to-t from-gray-50 h-20 -mt-20 mb-4 relative z-10 pointer-events-none" />
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
  )
}

export default Description
