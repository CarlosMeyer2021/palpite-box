import React, { useState } from 'react'
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

    toast("🚀 SALVO COM  SUCESSO !", {
      className: "custom-toast ",
      type: toast.TYPE.SUCCESS,
      rtl: true,
      draggable: false,
      hideProgressBar: false,
      pauseOnHover: false,
      autoClose: 2000,
      progress: 0,
      transition: Zoom,
      position: toast.POSITION.TOP_RIGHT
    })

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
  const limpaCampos = () => {
    this.Nome.value = ''
    this.Email.value = ''
    this.Telefone.value = ''
    this.Mensagem.value = ''
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  /*const successToast = () => {
    //toast.success("SUCESSO");
    //autoClose = 3000
    toast("SUCESSO", {
      className: "custom-toast",
      type: sucess,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: false,
      autoClose: 2000,
      progress: undefined,
      transition: Zoom,
      position: toast.POSITION.TOP_RIGHT
    })
  }
*/
  //toast.error("DEU ERRO");
  //toast.success("SUCESSO");
  //toast.info("INFORMAÇÃO PARA VOCÊ");
  //toast.warn("TENHA ATENÇÃO");
  //<ToastContainer draggable={false} transition={Zoom} autoClose={3000} />

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

      {!sucess && <div className='max-w-sm max-w-md max-w-lg mx-auto'>
        <div className='w-auto mx-auto w-4/5'>
          <div className='w-auto mx-auto w-5/6'>
            <label className='font-bold'>Seu nome:</label>
            <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
            <label className='font-bold'>Email:</label>
            <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
            <label className='font-bold'>Contato:</label>
            <input type='text' className='w-80 p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Telefone' onChange={onChange} name='Telefone' value={form.Telefone} />
            <label className='font-bold'>Mensagem:</label>
            <textarea className='w-80 h-36 p-4 block shadow bg-yellow-100 my-4 rounded-lg placeholder-gray-500 placeholder-opacity-50' placeholder='Digite sua mensagem' onChange={onChange} name='Mensagem' value={form.Mensagem}></textarea>

          </div>

          <div className='w-auto mx-auto w-4/5'>
            <button className='border-0 w-80 rounded-full bg-red-800 text-white font-bold shadow-lg hover:shadow py-4 mb-3' onClick={saveContato}>Enviar</button>
          </div>
        </div>
      </div>}
    </div>

  )

}
export default Contato