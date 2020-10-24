import Link from 'components/link'
import RelatedProducts from 'components/related-products'

const HomeProducts = ({ products }) => (
  <section className="border-t-8 border-b-8 border-white py-4">
    <div className="max-w-screen-xl m-auto px-6">
      <div className="flex text-gray-700 justify-between mb-2 px-2">
        <h5 className="font-semibold leading-tight tracking-tight text-lg">
          Produtos mais populares
        </h5>
        <Link
          href="/produtos"
          className="underline text-sm hover:text-teal-700 hidden sm:flex"
        >
          todos os produtos
        </Link>
      </div>
      <RelatedProducts products={products} />
      <Link
        href="/produtos"
        className="underline text-sm hover:text-teal-700 sm:hidden px-2 mt-2 inline-block"
      >
        todos os produtos
      </Link>
    </div>
  </section>
)

export default HomeProducts
