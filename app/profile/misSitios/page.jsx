import Link from "next/link"

const miSitios = () => {
  return (
    <section className='w-full'>
      <div className="block">    
        <h1 className='head_text text-left blue_gradient'>
          Mis Sitios
        </h1>
        <p className='desc text-left'>
          Aqui puedes ver el listado de tus sitios.
        </p>
      </div>
    <div className="py-10">
      <Link
        href='/'
        className='blue_btn'
      >
        Crear nuevo sitio      
      </Link>
    </div>
  </section>
  )
}

export default miSitios