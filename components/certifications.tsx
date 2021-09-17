import Img from 'next/image'
import anvisa from '../public/static/svgs/anvisa.svg'
import eureciclo from '../public/static/svgs/eureciclo.svg'
import parabenos from '../public/static/svgs/parabenos.svg'
import artesanal from '../public/static/svgs/artesanal.svg'
import fragrancias from '../public/static/svgs/fragrancias.svg'
import crueltyFree from '../public/static/svgs/cruelty-free.svg'
import { getBlurDataURL } from 'components/img'

const Certifications = () => (
  <div className="bg-white">
    <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Certificados pela ANVISA"
            className="max-h-12"
            src={anvisa}
            alt="Anvisa"
          />
        </div>
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Investimos na compensação ambiental das embalagens que produzimos"
            className="max-h-12"
            src={eureciclo}
            alt="Eu Reciclo"
          />
        </div>
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Livre de parabenos e outros absurdos sintéticos"
            className="max-h-12"
            src={parabenos}
            alt="Sem parabenos"
          />
        </div>
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Produtos artesanais"
            className="max-h-12"
            src={artesanal}
            alt="Artesanal"
          />
        </div>
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Livres de crueldade animal"
            className="max-h-12"
            src={crueltyFree}
            alt="Livre de crueldade animal"
          />
        </div>
        <div className="flex justify-center col-span-1 px-6 py-6 bg-gray-50">
          <Img
            placeholder="blur"
            blurDataURL={getBlurDataURL(65)}
            width={65}
            height={65}
            title="Sem fragrâncias sintéticas"
            className="max-h-12"
            src={fragrancias}
            alt="Sem Fragrâncias sintéticas"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Certifications
