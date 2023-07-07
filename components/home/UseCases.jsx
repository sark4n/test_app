import Link from "next/link"
import LastestPropis from "./lastestPropis"



const UseCases = () => {
  return (
<section class="bg-transparent">
  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="">
      <h2 class="pb-2 text-3xl font-bold sm:text-4xl sm:text-center green_gradient">Propiedades Destacadas</h2>
      <p class="mt-4 text-gray-600">
        En RSO Asesorias tambien contamos con servicios de corretaje de propiedades.<br/> 
        Hecha un vistaso a las ultimas propiedades destacadas en la pagina.
      </p>
    </div>

    <LastestPropis/>

    <div class="mt-12 text-center">
      <button className="inline-block rounded-md bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-green-600">
        <Link href="/propiedades">Ir al Catalogo de propiedades</Link>
      </button>
    </div>
  </div>
</section>

)
}

export default UseCases