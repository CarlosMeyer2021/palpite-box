import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Mensagem = () => {
  <PageTitle title='Mensagem' />
  return (
    <div class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
      <div className='relative'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-400 placeholder-opacity-50' placeholder='Nome' />
        <label className='font-bold'>Email:</label>
        <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-300 placeholder-opacity-50' placeholder='Email' />
        <label className='font-bold'>WhatsApp:</label>
        <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-300 placeholder-opacity-50' placeholder='Whatsapp' />
        <label className='font-bold'>Nota:</label>
        <div className='flex py-6'>
        </div>
      </div>
      <div className=''>
        <button className='w-full rounded-full bg-red-800 text-white font-bold shadow-lg hover:shadow py-4 mb-3' name='btnsalvar' >Gerar Cupom</button>
      </div>
    </div>
  )

}
export default Mensagem