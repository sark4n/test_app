import Image from "next/image"

const NuevaPyme = () => {
  return (
    <>
    {/* HEADER */}
    <div> 
      <h1 className='head_text text-left'>
        Creación y formalización de tu nueva empresa.
      </h1>
    </div>
    {/* BODY */}
    <div className="mt-4 flex-center flex-col sm:flex-row gap-4">
      <p className='desc text-left max-w-md items-center justify-center'>
        Te ayudamos a crear y formalizar tu negocio. Te ayudamos a elegir cual es la mejor 
        forma de crear tu empresa ya sea un SPA, LTDA o lo que se adapte mejor a lo que haces. 
      </p>
      <Image
        src='/assets/images/guy_header4.jpg'
        alt='guy_header'
        width={450}
        height={450}
        className='object-contain mt-4'
      />
    </div>

    {/* PREGUNTAS */}
    <div className="pt-6 pb-12 space-y-4">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-black p-4 text-gray-900"
        >
          <h2 className="font-medium text-white">
            ¿ Que implica formalizar mi negocio ? 
          </h2>
          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Al formalizar tu negocio, se creara una nueva entidad, con su propio rut, independiente de ti en ciertos aspectos.
          Idealmente empezaras dar boletas o facturas a tus clientes cuando realices tu actividad.
          Esto genera impuestos <i>(IVA)</i>, que deberas contabilizar mes a mes en el SII.
          <i> (recuerda que podemos ayudarte con esto tambien)</i>
      
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-black p-4 text-gray-900"
        >
          <h2 className="font-medium text-white">
            ¿ En que me beneficia formalizar mi negocio ? 
          </h2>
          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          El formalizar tu negocio es la manera de mostrarle al mundo financiero que tu negocio existe.
          Con tus boletas o facturas mostraras la actividad que tienes, y cuando lleves 1 año <i>(tiempo que generalmente te piden todos) </i>
          se te abriran las puertas al financiamiento. De ahi en adelante empiezas a crecer de verdad.
          <i> (recuerda que podemos ayudarte con las postulaciones, preparación, etc.)</i>
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-black p-4 text-gray-900"
        >
          <h2 className="font-medium text-white">
           ¿ Como empiezo entonces ? 
          </h2>
          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Ve a "Iniciar Sesion" y entra con tu cuenta, desde tu perfil ve a la seccion "Mis empresas" 
        y luego a crear nueva empresa. Sigue los pasos desde ahi.
        </p>
      </details>
    </div>

    </> 
  )
}

export default NuevaPyme