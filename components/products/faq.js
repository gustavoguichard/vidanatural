import get from 'lodash/get'

import FaqItems from 'components/faq-items'

const ProductFaq = ({ items }) =>
  get(items, 'length') ? (
    <div className="bg-white w-full">
      <div
        id="faq"
        className="max-w-screen-xl mx-auto pt-4 px-10 pb-8 flex justify-center"
      >
        <div className="md:w-9/12">
          <h3 className="text-3xl font-bold mt-10 mb-6 text-center tracking-tight">
            Dúvidas frequentes
          </h3>
          <FaqItems items={items} />
        </div>
      </div>
    </div>
  ) : null

export default ProductFaq
