import React, { useState, Component } from 'react'
import PageTitle from '../components/PageTitle'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { data } from 'autoprefixer';
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

    toast("🚀 CONTATO SALVO COM SUCESSO !", {
      className: "custom-toast ",
      type: toast.TYPE.SUCCESS,
      rtl: true,
      draggable: false,
      hideProgressBar: false,
      pauseOnHover: false,
      autoClose: 1500,
      progress: 0,
      transition: Zoom,
      position: toast.POSITION.TOP_CENTER

    })
    if (toast) {
      setTimeout(() => {
        setForm({ Nome: "", Email: "", Telefone: "", Mensagem: "" })
      }, 1500);

    }

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

  /*if (JSON.stringify) {
    form.value = ''
    console.log(JSON.stringify)

  }*/


  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    //console.log(evt.target)
    //<pre>{JSON.stringify(form, null, 2)}</pre>
    setForm(old => ({
      ...old,
      [key]: value
    }))

  }


  return (

    <div className='pt-6 bg-white'>
      <PageTitle title='Pesquisa' />
      <>
        <ToastContainer />
      </>
      <div className='w-auto text-center'>
        <h1 className='font-bold my-4 text-2xl'>Contato</h1>
        <p className='mb-6 text-yellow-900'>
          Fale conosco em um de nossos canais de atendimento.
        </p>
      </div>

      {!sucess && <div className='relative w-full max-w-md px-5 py-4 mx-auto rounded-md'>
        <div className='relative'>
          <div className=''>
            <label className='font-bold'>Seu nome:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
            <label className='font-bold'>Email:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
            <label className='font-bold'>Contato:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Telefone' onChange={onChange} name='Telefone' value={form.Telefone} />
            <label className='font-bold'>Mensagem:</label>
            <textarea className='w-full h-36 p-4 block shadow bg-yellow-100 my-4 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Digite sua mensagem' onChange={onChange} name='Mensagem' value={form.Mensagem}></textarea>

          </div>

          <div className=''>
            <button className='border-0 w-full rounded-full bg-red-800 text-white font-bold shadow-lg hover:shadow py-4 mb-3' onClick={saveContato}>Enviar</button>
          </div>

        </div>
      </div>}
    </div>

  )

}
export default Contato