import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { data } from 'autoprefixer';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    WhatsApp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    toast("🚀 CUPOM GERADO COM SUCESSO !", {
      className: "custom-toast ",
      type: toast.TYPE.SUCCESS,
      rtl: true,
      draggable: false,
      hideProgressBar: false,
      pauseOnHover: false,
      autoClose: 2500,
      progress: 0,
      transition: Zoom,
      position: toast.POSITION.TOP_CENTER
    })
    if (toast) {
      setTimeout(() => {
        setForm({ Nome: "", Email: "", Telefone: "", WhatsApp: "" })
      }, 2500);

    }

    try {
      const response = await fetch('/api/save', {
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
      <>
        <ToastContainer />
      </>
      <div className='text-center'>
        <h1 className='font-bold my-4 text-2xl'>Críticas e sugestões</h1>
        <p className='mb-6 text-yellow-900'>
          O restaurante X sempre busca por atender melhor seus clientes.<br />
          Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
      </div>

      {!sucess && <div className='relative w-full max-w-md px-5 py-4 mx-auto rounded-md'>
        <div className='relative'>
          <div className=''>
            <label className='font-bold'>Seu nome:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-400 placeholder-opacity-50' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
            <label className='font-bold'>Email:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-300 placeholder-opacity-50' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
            <label className='font-bold'>WhatsApp:</label>
            <input type='text' className='w-full p-4 block shadow bg-yellow-100 my-2 rounded-lg placeholder-gray-300 placeholder-opacity-50' placeholder='Whatsapp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
            <label className='font-bold'>Nota:</label>
            <div className='py-6 '>
              {notas.map(nota => {
                return (
                  <labe className='block px-5 '>
                    {nota}<br />
                    <input type='radio' name='Nota' value={nota} onChange={onChange} />
                  </labe>
                )
              })
              }
            </div>
          </div>

          <div className=''>
            <button className='w-full rounded-full bg-red-800 text-white font-bold shadow-lg hover:shadow py-4 mb-3' name='btnsalvar' onClick={save}>Gerar Cupom

            </button>

          </div>
        </div>
      </div>}
      {sucess && <div className='w-1/2 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block md-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon.</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa