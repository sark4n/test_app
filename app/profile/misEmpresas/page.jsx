import Link from "next/link"

const misEmpresas = () => {
  return (
    <section className='w-full'>
      <div className="block">    
        <h1 className='head_text text-left blue_gradient'>
          Mis Empresas
        </h1>
        <p className='desc text-left'>
          Aqui puedes ver el listado de tus empresas.
        </p>
      </div>
    <div className="py-10">
      <Link
        href='/'
        className='blue_btn'
      >
        Crear nueva empresa
      </Link>
    </div>
  </section>
  )
}

export default misEmpresas