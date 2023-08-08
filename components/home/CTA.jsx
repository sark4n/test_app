import Link from "next/link"

const CTA = () => {
  return (
    <div className="bg-tranparent">
    <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Pensando en empezar?</span>
        <span className="block green_gradient">Contáctanos.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="sm:ml-6 inline-flex rounded-md shadow">
          <Link
            href='https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20servicios.'
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-green-600"
          >
            Hagamos que suceda!
          </Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <Link
            href="https://www.instagram.com/asesoriasrso"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-600 hover:bg-green-50"
          >
            Quiero saber más
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CTA