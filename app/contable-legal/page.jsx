import CTA from "@components/home/CTA"
import Image from "next/image"
import Link from "next/link"


const ContableLegal = () => {
  return (
    <>
    {/* HEADER */}
    <div> 
      <h1 className='head_text text-left'>Asesoria Contable y Legal a tu alcance
      </h1>
    </div>
    <div className="mt-4 flex-center flex-col sm:flex-row gap-4">
      <p className='desc text-left max-w-md items-center justify-center'>
      En rso asesorías, nos encargamos de brindarte el apoyo necesario para formalizar tu 
      empresa y resolver cualquier asunto legal, de manera rápida y eficiente. 
      </p>
      <Image
        src='/assets/images/woman_header1.jpg'
        alt='guy_header'
        width={450}
        height={450}
        className='object-contain mt-4'
      />
    </div>
    {/* BODY */} 
    <div className="py-8 space-y-4">
      <div>
        <h1 className="font-extrabold">Contabilidad simplificada</h1>
        <p>¿Necesitas ayuda con la formalización de tu empresa ante el Servicio de Impuestos Internos? 
          No te preocupes, nuestros expertos te guiarán para encontrar el régimen tributario que mejor 
          se adapte a tu negocio. Además, te ofrecemos servicios contables personalizados para cubrir 
          todas tus necesidades.
        </p> 
      </div>
      <div>
      <h1 className="font-extrabold">Acompañamiento legal especializado</h1>
        <p>Sabemos que los asuntos legales pueden ser complicados. En rso asesorías, contamos con 
          especialistas en temas inmobiliarios, familiares, civiles y más. No importa la naturaleza 
          de tu situación, estamos aquí para brindarte la asesoría legal que necesitas.
        </p> 
      </div>
      <div>
      <h1 className="font-extrabold">Solución a medida</h1>
        <p>No importa cuál sea tu situación empresarial o legal, en rso asesorías nos adaptamos a cada 
          caso específico. Nuestro objetivo es ofrecerte soluciones personalizadas y efectivas para que 
          puedas tomar decisiones informadas y satisfactorias.
        </p> 
      </div>
    </div>
    {/* CTA   */}

    <div className="pb-8">
    <p><span className="green_gradient font-extrabold">Confianza y tranquilidad. </span>Puedes confiar en 
    nuestro equipo de expertos altamente capacitados. Nos comprometemos a brindarte un servicio de calidad 
    y garantizar que tus necesidades contables y legales sean atendidas de manera profesional y confidencial.
    ¡No esperes más! 
    </p>
    <CTA/>
    </div>
    </>




  )
}

export default ContableLegal