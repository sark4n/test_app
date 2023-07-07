import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'


const MainHeader = () => {
  return (
    <>
        <h1 className="head_text text-center">
            Asesoría<br/>
        <span className="green_gradient text-center">
        <Typewriter
            words={[' para PyMes', ' Contable', ' Legal', 'Inmobiliaria' ]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={4000}
            // onLoopDone={handleDone}
            // onType={handleType}
        /></span>
        </h1>
        <p className='desc text-center'>
            Has crecer tu negocio con las herramientas que tenemos para ofrecerte.
        </p>
        <Link
            href='/contacto'
            className="mt-12 inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-green-600"
          >
            Comienza Hoy
          </Link>
        {/* <div className='py-14 text-center'>
        <p className='lg:text-xl text-md font-medium leading-8 text-blue-950 sm:text-center  transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600 hover:text-orange-600'>
        <Link href='/nuevapyme'>Creacion y Formalizacion de tu Empresa</Link>
        </p>
        <br/> 
        <p className='mx-1 lg:text-xl text-md font-medium leading-8 text-blue-950 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600 hover:text-orange-600'>
        <Link href='/mkt'> Sitio Web y Marketing Digital</Link>
        </p>
        <br/>
        <p className='mx-1 lg:text-xl text-md font-medium leading-8 text-blue-950 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600 hover:text-orange-600'>
        <Link href='/contable-legal'> Asesoria Contable y Legal</Link>
        </p>
        <br/>
        <p className='mx-1 lg:text-xl text-md font-medium leading-8 text-blue-950 sm:text-center transition duration-300 ease-in-out border-b-2 border-transparent hover:border-orange-600 hover:text-orange-600'>
        <Link href='/propiedades'> Corredora de Propiedades</Link>
        </p>
        </div> */}
    </>
  )
}

export default MainHeader