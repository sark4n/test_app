import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'


const MainHeader = () => {
  return (
    <>
        <h1 className="head_text text-center">
            Asesoría para <br/>
        <span className="blue_gradient text-center">
        <Typewriter
            words={[' Emprendedores', ' Creadores',' Soñadores', ' Personas como tu!']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
        /></span>
        </h1>
        <p className='desc text-center'>
            Has crecer tu negocio con las herramientas que tenemos para ofrecerte
        </p>
        
        <div className='py-14 text-center'>
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
        </div>
    </>
  )
}

export default MainHeader