import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {

  return (
    <div className='bg-red-100'>
      <PageTitle title='Sobre' />
      <div className='w-auto text-center bg-red-100'>
        <h1 className='font-bold mb-1 text-2xl'>Sobre</h1>
      </div>

      <div class="md:flex">

        <div class="w-full md:w-1/2 bg-red-50">
          <div class="">
            <img class="w-screen opacity-25" src="fundo-sobre.jpg" alt='fundo-sobre' />
          </div>
        </div>
        <div class="w-full md:w-1/2 my-0 bg-red-50">
          <p class="italic text-gray-900 mt-2 text-gray-500">
            Nossa História
            Conheça um pouco sobre nós
            O Restaurante foi inaugurado em 1997, em uma das mais badaladas
            ruas do Itaim Bibi. Criado pela Família Nagai, que atua no mercado de
            pescados há mais de 40 anos, garantindo assim a qualidade e frescor dos
            produtos que chegam à mesa dos clientes. O Aoyama é pioneiro em oferecer
            rodízio completo da culinária japonesa, que inclui desde os tradicionais
            sushis, sashimis e pratos quentes até itens especialmente elaborados
            para encantar os paladares mais apurados. Sinônimo de fartura,
            o restaurante impressiona pela grande variedade de pratos e novidades
            constantes no cardápio. A equipe Aoyama trabalha nos mais elevados
            padrões de qualidade e atendimento, o que resulta em rapidez
            no serviço e uma ótima relação custo-benefício para os clientes,
            que desfrutam de tudo isso em ambientes modernos e acolhedores.
            Por esses motivos, o Aoyama é um dos restaurantes japoneses mais
            conhecidos da cidade.</p>
        </div>
      </div>
    </div>
  )
}
export default Sobre