import LastestPropis from "@components/home/lastestPropis"


const Propiedades = () => {
  return (
    <>
    <div> 
      <h1 className='head_text text-left'>
      Listado de Propiedades publicadas
      </h1>
      <p className='desc text-left max-w-md'>
      ¿Estas interesado en que tu propiedad aparezca listada aquí? Inicia sesión y sigue los pasos desde tu perfil.
      </p>
    </div>
    <LastestPropis/>
    </> 
  )
}

export default Propiedades