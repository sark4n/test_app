import CTA from "@components/home/CTA"
import Image from "next/image"

const Marketing = () => {
  return (
    <>
    {/* HEADER */}
    <div className=""> 
      <h1 className='head_text text-left'>
        Tu sitio Web y Marketing Digital.
      </h1>
      <p className='desc text-left max-w-md py-4'>
        Te ofrecemos soluciones completas en desarrollo web, marketing digital y SEO para impulsar tu negocio al siguiente nivel.
      </p>
    </div>
    {/* BODY */}
    <div className="my-8 grid sm:grid-cols-2 md:grid-cols-2 gap-8 grid-cols-1">
      
      <div className="flex-center gap-2">
        <Image 
          src="/assets/icons/tick2.svg" 
          className="w-10 h-10" 
          width="512" 
          height="512" 
          alt="badge-icon"/>
        <div>
        <h1 className="green_gradient font-extrabold">Desarrollo web a medida</h1>
        <p className="mt-2">Nuestro equipo de expertos en desarrollo web creará una página web personalizada y atractiva que refleje la 
          identidad de tu negocio y se adapte perfectamente a tus necesidades.
        </p>
        </div>
      </div>

      <div className="flex-center gap-2">
        <Image 
          src="/assets/icons/broadcast.svg" 
          className="w-10 h-10" 
          width="512" 
          height="512" 
          alt="badge-icon"/>
        <div>
          <h1 className="green_gradient font-extrabold"> Aumenta tu presencia en línea</h1>
          <p className="mt-2">Con nuestro servicio de marketing digital, te ayudaremos a aumentar la visibilidad de tu negocio en Internet. 
            Utilizamos estrategias efectivas para llegar a tu público objetivo y generar más clientes potenciales.
          </p>
        </div>
      </div>

      <div className="flex-center gap-2">
        <Image 
            src="/assets/icons/badge.svg" 
            className="w-10 h-10" 
            width="512" 
            height="512" 
            alt="badge-icon"/>
        <div>
          <h1 className="green_gradient font-extrabold">Optimización para los motores de búsqueda</h1>
          <p className="mt-2">No te pierdas en el mar de resultados de búsqueda. Nuestro equipo de expertos en SEO optimizará tu 
            sitio web para que aparezca en los primeros resultados de búsqueda, aumentando así tu tráfico orgánico y visibilidad.
          </p>
        </div>
      </div>

      <div className="flex-center gap-2">
        <Image 
            src="/assets/icons/graphs.svg" 
            className="w-10 h-10" 
            width="512" 
            height="512" 
            alt="badge-icon"/>
        <div>
          <h1 className="green_gradient font-extrabold">Obtén resultados tangibles</h1>
          <p className="mt-2">Nuestra asesoría digital se basa en obtener resultados tangibles. 
            Te proporcionaremos informes detallados y métricas para que puedas medir el impacto de nuestras acciones y tomar decisiones informadas.
          </p>
        </div>
      </div> 
    
    </div>
    <CTA/>

    </> 
  )
}

export default Marketing