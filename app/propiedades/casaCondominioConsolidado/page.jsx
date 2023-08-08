import Slider from "../components/slider"

const Propiedad1 = () => {
  const slides = [
    { url: "https://i.ibb.co/TMhrkHK/fe85faca-54f0-4668-8bfe-232b81f39eac.jpg", title: "1" },
    { url: "https://i.ibb.co/qN79KkG/4cc1c0a6-d659-4614-a093-6e4f1d3a0cab.jpg", title: "2" },
    { url: "https://i.ibb.co/VVPxQXr/4d52d963-f7ed-496a-a93e-4a5da4dc8c06.jpg", title: "3" },
    { url: "https://i.ibb.co/3NqKxm8/8ea2d18e-9695-434a-82be-24bc2c2a6a6a.jpg", title: "4" },
    { url: "https://i.ibb.co/5vT49y5/32acf695-c97f-437c-8cee-ebfb22968977.jpg", title: "5" },
    { url: "https://i.ibb.co/TY47WC8/96c4828d-d558-48b6-a1e5-05de0293b6b8.jpg", title: "6" },
    { url: "https://i.ibb.co/NCmFGgJ/262d2491-0c30-48f3-b44b-20688b853184.jpg", title: "7" },
    { url: "https://i.ibb.co/5YHVNrT/466d8c6f-83a9-42df-9b96-e6166ede144e.jpg", title: "8" },
    { url: "https://i.ibb.co/7QtpbrL/1370e9cf-2e5f-4c57-a9f7-393219196caa.jpg", title: "9" },
    { url: "https://i.ibb.co/qCX8fGJ/97352e69-9aad-42e0-8fb7-c579f5896acb.jpg", title: "10" },
    { url: "https://i.ibb.co/nRChCDf/12705346-2309-43d8-9e09-a90954ad774c.jpg", title: "11" },
    { url: "https://i.ibb.co/dP1Tt2g/c7387b4f-5504-4c5d-9e3d-825ecaf72404.jpg", title: "12" },
    { url: "https://i.ibb.co/1sYW24p/f0400d4d-6a33-44c6-9d13-e7dd4692cd3c.jpg", title: "13" },
    { url: "https://i.ibb.co/8YHtv60/fc33f177-6d2d-4ff6-8842-42d9f9e2c6d3.jpg", title: "14" },
    { url: "https://i.ibb.co/HTyP59T/01c4e987-251c-4a04-950c-0bc375928bb3.jpg", title: "15" },
    
  ];
  const containerStyles = {
    width: "400px",
    height: "280px",
    margin: "0",
  };



  return (
<section className="w-screen sm:p-24 sm:pt-0 sm:pb-8 p-8 pt-0">
  {/* HEADER */}
  <div>
    <h1 className="font-extrabold font text-xl">
        Casa en Condominio Consolidado
    </h1>
  </div>
  {/* SLIDER */}
  <div className="sm:flex pt-2 gap-8">
    <div className="h-96 sm:w-4/5">
    <Slider slides={slides}/>
    </div>
    {/* CARACTERISTICAS */}
    <div className="bg-green-50 p-2 border-2 border-green-100 sm:mt-2 mt-12">  
      <h1 className="text-lg font-bold">Características</h1>
      <div className="mt-6 grid gap-4 grid-cols-3 grid-rows-3">
      {/* ITEM1 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                  <img
                    alt="mt2"
                    src="\assets\icons\mt2.svg"
                    class="h-5 w-5"
                  />
                    <p class="font-medium text-green-600">240</p>
                  </div>
                  <div>            
                  <p class="text-gray-500">mts2 Construidos</p>
                  </div>
        </div>
      {/* ITEM 2 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                  <img
                    alt="mt2"
                    src="\assets\icons\toilet2.svg"
                    class="h-5 w-5"
                  />
                    <p class="font-medium text-green-600">2</p>
                  </div>
                  <div>            
                  <p class="text-gray-500">Baños</p>
                  </div>
        </div>
      {/* ITEM 3 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                    <img
                      alt="mt2"
                      src="\assets\icons\bed2.svg"
                      class="h-5 w-5"
                    />
                    <p class="font-medium text-green-600">4</p>
                  </div>
                  <div>            
                  <p class="text-gray-500">Dormitorios</p>
                  </div>
        </div>
      {/* ITEM 4 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                    <img
                      alt="mt2"
                      src="\assets\icons\bed2.svg"
                      class="h-5 w-5"
                    />
                    <p class="font-medium text-green-600">Logia</p>
                  </div>
        </div>
      {/* ITEM 5 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                    <img
                      alt="mt2"
                      src="\assets\icons\bed2.svg"
                      class="h-5 w-5"
                    />
                    <p class="font-medium text-green-600">Piscina</p>
                  </div>
        </div>
      {/* ITEM 6 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                    <img
                      alt="mt2"
                      src="\assets\icons\bed2.svg"
                      class="h-5 w-5"
                    />
                    <p class="font-medium text-green-600">Quincho & Terraza</p>
                  </div>
        </div>
      {/* ITEM 7 */}
        <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <div class="mt-1.5 sm:mt-0 flex gap-1">
                    <img
                      alt="mt2"
                      src="\assets\icons\bed2.svg"
                      class="h-5 w-5"
                    />
                    <p class="font-medium text-green-600">Bodega</p>
                  </div>
        </div>                                                 
      </div>
      {/* PRECIO Y CTA */}
      <div className="flex-center gap-2 py-8">
        <button
          type="submit"
          className="rounded bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-green-600"
        >
          Me interesa
        </button>
        <div>
          <p className="font-semibold">Valor Arriendo</p>
          <p className="text-xl font-bold">$1.200.000 /m</p>
        </div>
      </div> 
    </div>
  </div>
 
  {/* TEXTO */}
  <div className="sm:pt-8 pt-4">
    <p>
    Gasto comun $10.000. Arriendo casa en condominio consolidado, son 240 mts2 con terraza.
    El valor del arriendo incluye la manutecion del jardin y piscina.
    Cuenta con excelente conectividad a 45 minutos de Santiago y a 35 de melipilla.
    A 5 minutos de la municipalidad, banco, supermercado, registro civil, y centro de salud primaria,
    carabineros. Cuenta con agua y pozo.
    </p>
  </div>
</section>
  )
}

export default Propiedad1
