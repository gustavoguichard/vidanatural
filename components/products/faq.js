import FaqItems from 'components/faq-items'

const ProductFaq = ({ items }) =>
  items?.length ? (
    <div className="w-full bg-white">
      <div
        id="faq"
        className="flex justify-center max-w-screen-xl px-10 pt-4 pb-8 mx-auto"
      >
        <div className="md:w-9/12">
          <h3 className="mt-10 mb-6 text-3xl font-bold tracking-tight text-center">
            Dúvidas frequentes
          </h3>
          <FaqItems items={items} />
        </div>
      </div>
    </div>
  ) : null

export default ProductFaq
