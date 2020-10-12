import get from 'lodash/get'

import FaqItems from 'components/faq-items'

const ProductFaq = ({ items }) => {
  return get(items, 'length') ? (
    <div className="max-w-screen-xl pt-4 pb-8 bg-white flex justify-center">
      <div className="mx-2 md:w-9/12">
        <h3 className="text-3xl font-bold mt-10 mb-6 text-center tracking-tight">
          Dúvidas frequentes
        </h3>
        <FaqItems items={items} />
      </div>
    </div>
  ) : null
}

export default ProductFaq
