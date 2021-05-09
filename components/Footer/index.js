import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
      <div className='container mx-auto p-4 text-center font-bold text-white'>
        Projeto desenvolvido por:{' '} 
        <a className='hover:underline' href= 'https://cadev.com.br'>Carlos Meyer</a> /{' '}  
        <a className='hover:underline' href='#'>Linkedin</a> / {' '} 
        <a className='hover:underline' href='#'>Github</a>{' '} 
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}
export default Footer