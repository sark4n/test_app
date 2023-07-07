import Image from "next/image"
import Link from "next/link"

const Features = () => {
  return (
    <div className="py-12 bg-transparent overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
            {/* {Header} */}
            <div 
                className="block space-y-8 sm:space-x-8 sm:flex md:flex">
            <Image
                src='/assets/images/guy_header3.jpg'
                alt='guy_header'
                width={450}
                height={450}
                className='object-contain'
            />
            <p className="green_gradient text-5xl font-extrabold sm:pt-24 md:pt-24">Lo que necesitas en un solo sitio.</p>
            {/* <h2 className="mt-8 text-lg text-gray-600 md:text-lg">
                RSO Asesores es el socio perfecto para emprendedores y pymes que quieren hacer crecer su negocio. <br className="lg:block" hidden/> 
                Con nuestro equipo de profesionales experimentados, ofrecemos una amplia gama de herramientas para ayudarlo a alcanzar sus objetivos.
            </h2> */}
            </div>

            {/* {Container} */}
            <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                <Link href="/nuevapyme" className="relative group bg-transparent transition hover:z-[1] hover:shadow-2xl hover:bg-green-50">
                    <div className="relative p-8 space-y-8 scale-90 transition duration-300 group-hover:scale-100">
                        <img src="https://i.ibb.co/tZq7Gsw/icono-Tienda2.png" className="w-10" width="512" height="512" alt="icono tienda"/>
                        <div className="space-y-2">
                            <h5 className="text-xl text-black font-extrabold transition group-hover:text-green-600">¿Tienes una idea de negocio?</h5>
                            <p className="text-sm text-gray-600">Ofrecemos soporte personalizado y asesoramiento adaptado a sus necesidades específicas. Nuestros expertos te brindan los recursos necesarios para crear y formalizar tu empresa en el servicio de impuestos internos, así como servicios de desarrollo web y marketing digital que te ayudarán a diferenciarte de la competencia.</p>
                        </div>
                    {/* <button type='button' className='blue_btn'>Me interesa</button> */}
                    </div>
                </Link>

                <Link href="/mkt" className="relative group bg-transparent transition hover:z-[1] hover:shadow-2xl hover:bg-green-50">
                    <div className="relative p-8 space-y-8 scale-90 transition duration-300 group-hover:scale-100 ">
                        <img src="https://i.ibb.co/HVp6zx2/icono-Redes2.png" className="w-10" width="512" height="512" alt="icono redes"/>
                        <div className="space-y-2">
                            <h5 className="text-xl text-black font-extrabold transition group-hover:text-green-600">Creamos tu sitio Web y potenciamos tus redes</h5>
                            <p className="text-sm text-gray-600">Tu sitio web es como tu local fisico, pero en la web; es la fachada de tu negocio y la manera que tienen tus futuros clientes de conocerte.
                                Servicios de desarrollo web y marketing digital que te ayudarán a diferenciarte de la competencia.</p>
                        </div>
                        {/* <button type='button' className='blue_btn'>Me interesa</button> */}
                    </div>
                </Link>                

                <Link href="/contale-legal" className="relative group bg-transparent transition hover:z-[1] hover:shadow-2xl hover:bg-green-50">
                    <div className="relative p-8 space-y-8 scale-90 transition duration-300 group-hover:scale-100 ">
                        <img src="https://i.ibb.co/hmKxsyF/contabilidad.png" className="w-10" width="512" height="512" alt="icono legal y contable"/>
                        <div className="space-y-2">
                            <h5 className="text-xl text-black font-extrabold transition group-hover:text-green-600">Asesoria Contable y Legal</h5>
                            <p className="text-sm text-gray-600">Asegurarse de que sus registros sean precisos es esencial para cualquier negocio, por lo que ofrecemos asistencia contable
                                y legal para ayudarlo a realizar un seguimiento de todos los gastos y garantizar que sus transacciones se realicen de acuerdo con las leyes aplicables. 
                                Con nuestra ayuda, puede estar seguro de que su negocio funciona sin problemas.</p>
                        </div>
                        {/* <button type='button' className='blue_btn'>Contactanos</button>  */}
                    </div>
                </Link>
               
                <Link href="/propiedades" className="relative group bg-transparent transition hover:z-[1] hover:shadow-2xl hover:bg-green-50">
                    <div className="relative p-8 space-y-8 scale-90 transition duration-300 group-hover:scale-100 ">
                        <img src="https://i.ibb.co/gz5dgCZ/icono-Corredor.png" className="w-10" width="512" height="512" alt="icono corredor"/>
                        <div className="space-y-2">
                            <h5 className="text-xl text-black font-extrabold transition group-hover:text-green-600">Corredor de Propiedades</h5>
                            <p className="text-sm text-gray-600">Nuestro equipo también se especializa en brindar asesoría legal en adquisiciones y ventas de bienes raíces. 
                                Trabajamos de cerca con usted para garantizar que todas las transacciones cumplan con las regulaciones locales y maximicen el retorno de su inversión.</p>
                        </div>
                        {/* <button type='button' className='blue_btn'>Quiero contactarlos</button> */}
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Features



