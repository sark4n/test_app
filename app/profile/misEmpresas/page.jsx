import Link from "next/link"

const misEmpresas = () => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='green_gradient'>Mis Empresas</span>
      </h1>
      <p className='desc text-left'>Aqui puedes ver el listado de tus empresas.</p>


      {/* MENSAJES */}
      <div className="pt-10 flex gap-6">
        <Link
          href='/create-prompt'
          className='black_btn'
        >
          Crear nueva empresa
        </Link>
      </div>
      <div className='mt-10 prompt_layout'>
      </div>

    </section>
  )
}

export default misEmpresas