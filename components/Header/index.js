import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
          <a><img className='mx-auto' src='logo_palpitebox.png' alt='PalpiteBox'/></a>
          </Link>
        </div>
      </div>
      <div className='bg-red-800 p-4 shadow-md text-center'>
      <Link href='/sobre'>
        <a className='px-5 mr-2 hover:underline bg-white rounded-full py-2 font-bold'>Sobre</a>
      </Link>
      <Link href='/contato'>
        <a className='px-2 mr-2 hover:underline bg-white rounded-full py-2 font-bold'>Contato</a>
      </Link>
      <Link href='/pesquisa'>
        <a className='px-2 hover:underline bg-white rounded-full py-2 font-bold'>Pesquisa</a>
      </Link>
      </div>
    </React.Fragment>
  )
}
export default Header