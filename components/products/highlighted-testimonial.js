import React, { memo } from 'react'
import Img from 'components/img'

const HighlightedTestimonial = ({ product }) =>
  product.slug.includes('desodorante') ? (
    <div className="flex justify-center px-4 pb-6 -mt-10 sm:-mt-24">
      <div className="relative flex flex-col max-w-screen-md gap-3 p-4 overflow-hidden bg-white border-8 rounded-sm sm:bg-transparent sm:overflow-visible sm:grid sm:grid-rows-3 sm:grid-cols-4 sm:text-white sm:border-0 sm:items-end">
        <div className="flex justify-center order-last sm:order-first sm:row-span-3 sm:col-span-1">
          <Img
            className="-mb-32 sm:-mb-4 sm:-ml-4 sm:-translate-x-6 translate-y-[6px]"
            src="/static/images/rodrigo-debiasi.png"
            width={200}
            height={400}
          />
        </div>
        <blockquote className="text-lg sm:row-span-2 sm:row-start-2 sm:col-span-3 sm:col-start-2 sm:text-base">
          <span className="hidden sm:block bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg absolute z-[-1] inset-0 sm:top-[33%]" />
          <p className="mb-2 italic tracking-tight">
            &#8220; Após <strong>testar pessoalmente</strong> os produtos da
            Vida Natural, posso afirmar com franqueza que a qualidade dos
            produtos é <strong>sensacional</strong>.
            <br />
            Como <strong>atleta, pude comprovar</strong>, mesmo em condições
            extremas da prática do <strong>triathlon por várias horas</strong>{' '}
            no calor do verão, que o desodorante cumpre a sua missão bravamente.
            <br />E como <strong>oncologista</strong>, recomendo o produto para
            todos, incluindo as pacientes que estão em{' '}
            <strong>tratamento</strong>, ou já fizeram terapia para o{' '}
            <strong>câncer de mama</strong>, pois sua composição sem compostos
            sintéticos é muito segura.
            <br />
            Parabéns pelo esmero, e pela linda dedicação em oferecer produtos
            biologicamente éticos.&#8221;
          </p>
          <p className="text-xs font-semibold">
            Dr.Rodrigo Benedetti Debiasi
            <br />
            Triatleta e Oncologista
          </p>
        </blockquote>
      </div>
    </div>
  ) : null

export default memo(HighlightedTestimonial)
