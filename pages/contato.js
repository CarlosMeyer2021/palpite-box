import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
//const email = require('../utils/email')

const Contato = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Telefone: '',
    Mensagem: '',
  })

  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const saveContato = async () => {
    try {
      const response = await fetch('/api/save-contato', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (error) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6 bg-white'>
      <PageTitle title='Pesquisa' />
      <div className='text-center'>
        <h1 className='font-bold my-4 text-2xl'>Contato</h1>
        <p className='mb-6 text-yellow-900'>
          Fale conosco em um de nossos canais de atendimento.
      </p>
      </div>

      {!sucess && <div className='w-screen min-w-screen max-w-3xl mx-auto'>
        <div className='w-1/2 mx-auto border-none'>
          <label className='font-bold'>Seu nome:</label>
          <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
          <label className='font-bold'>Email:</label>
          <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
          <label className='font-bold'>Contato:</label>
          <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Telefone' onChange={onChange} name='Telefone' value={form.Telefone} />
          <label className='font-bold'>Mensagem:</label>
          <textarea className='w-80 h-36 p-4 block shadow bg-yellow-100 my-4 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Digite sua mensagem' onChange={onChange} name='Mensagem' value={form.Mensagem}>

          </textarea>

        </div>
        <div className='w-1/2 mx-auto'>
          <button className='w-80 rounded-full bg-red-800 text-white font-bold shadow-lg hover:shadow py-4 mb-3' onClick={saveContato}>Enviar</button>
        </div>
      </div>}
    </div>
  )
}
export default Contato