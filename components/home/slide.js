import ReactMarkdown from 'react-markdown'
import { useSwipeable } from 'react-swipeable'

import CTALink from 'components/cta-link'
import Img from 'components/img'
import Link from 'components/link'

const ProductSlide = ({
  product,
  index,
  handleChange,
  children,
  hidden,
  show,
}) => {
  const onSwiping = ({ first, deltaX, absX }) => {
    first && absX > 10 && handleChange(deltaX < 0 ? index - 1 : index + 1)
  }
  const swipeHandlers = useSwipeable({ onSwiping })
  const swipeHandlers2 = useSwipeable({ onSwiping })
  return (
    <div
      className={`bg-no-repeat bg-contain sm:bg-auto sm:bg-center bg-gray-100 bg-top w-full items-center flex flex-col justify-center ${
        show && !hidden ? '' : '-z-1 invisible'
      } ${hidden ? 'static' : 'absolute'}`}
      style={{
        backgroundImage: `url('/static/images/products/${product.path}-bg.png')`,
      }}
    >
      <div
        className={`w-full md:w-10/12 flex justify-center ${
          hidden ? 'invisible' : 'visible'
        }`}
        css={{ minHeight: 350 }}
      >
        <Link
          {...swipeHandlers}
          href="/produtos/[slug]"
          as={`/produtos/${product.path}-${product.vndaId}`}
          title={product.title}
        >
          <Img
            css={{ width: 520 }}
            className={`max-w-full mt-8 transition duration-700 relative delay-500 opacity-${
              show ? '100' : '0'
            } transform -translate-y-${show ? '0' : '8'}`}
            hideSpinner
            src={`/static/images/products/${product.path}.png`}
            alt={product.title}
          />
        </Link>
      </div>
      <div
        className={`w-full justify-center md:w-10/12 z-10 p-0 ${
          hidden ? 'hidden' : 'flex'
        }`}
      >
        {children}
      </div>
      <div
        {...swipeHandlers2}
        className={`pt-0 w-full md:w-1/2 text-center ${
          hidden ? 'invisible' : 'visible'
        }`}
      >
        <div
          className={`bg-white shadow-sm bg-opacity-75 py-8 px-10 transition duration-700 relative transform translate-y-${
            show ? 0 : 10
          } ${show && !hidden ? '' : 'invisible'}`}
        >
          <h3 className="text-3xl font-semibold tracking-tight">
            {product.title}
          </h3>
          <ReactMarkdown
            escapeHtml={false}
            className="mt-2 mb-4 text-gray-700 text-lg"
            source={product.subtitle}
          />
          <CTALink
            color="secondary"
            href="/produtos/[slug]"
            as={`/produtos/${product.slug}`}
          >
            Saiba mais
          </CTALink>
        </div>
      </div>
    </div>
  )
}

export default ProductSlide
