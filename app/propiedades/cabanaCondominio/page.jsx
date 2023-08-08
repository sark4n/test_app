import Slider from "../components/slider"

const Propiedad2 = () => {
  const slides = [
    { url: "https://i.ibb.co/VBLysFq/1fbccdf0-7221-4cfc-9a7e-efa5aa601075.jpg", title: "1" },
    { url: "https://i.ibb.co/LpXNTNc/1c850a06-fd9a-49a7-9e3d-472871f4850b.jpg", title: "2" },
    { url: "https://i.ibb.co/4P5BjBy/03eaf022-f35d-48a0-93fb-54c21cd50d1e.jpg", title: "3" },
    { url: "https://i.ibb.co/HdRVDSK/07db52f2-c624-4f7c-9e25-7263d05e8cdd.jpg", title: "4" },
    { url: "https://i.ibb.co/R4wJfkH/9d26ee5a-f0fa-44e7-b27f-66d78b00ee34.jpg", title: "5" },
    { url: "https://i.ibb.co/sRsjD1B/45c2ac9a-a915-4595-b344-579e3d8be9f4.jpg", title: "6" },
    { url: "https://i.ibb.co/KFPzdbM/50bb2289-27e1-4740-b2f0-4044bf7fc176.jpg", title: "7" },
    { url: "https://i.ibb.co/MhXM0k3/168bec44-d81d-48c5-ba79-a4d70c017fc2.jpg", title: "8" },
    { url: "https://i.ibb.co/NtqKfhD/b27e88fb-df04-4ae0-8367-61acb06f5980.jpg", title: "9" },
    { url: "https://i.ibb.co/P9FC4jf/c0fcbbca-4ca5-4898-b48f-3f73b5c2797c.jpg", title: "10" },
    { url: "https://i.ibb.co/B2Tn9hZ/c99c1489-aab3-42cd-8d72-d7d4bc8e2355.jpg", title: "11" },
    { url: "https://i.ibb.co/bJz91xd/d1ff9ca5-0a72-4fa8-9e80-cffbff83ed88.jpg", title: "12" },
    { url: "https://i.ibb.co/RDF5rvw/ec615d88-b3c4-4c99-be1a-343d9d1593c5.jpg", title: "13" },
    { url: "https://i.ibb.co/kMcQdht/f06af2ab-31a5-4d0c-bd9e-425b5482c692.jpg", title: "14" },
    { url: "https://i.ibb.co/bbCdN9k/f40d7d1c-3db4-4419-b4b9-7c49a1200166.jpg", title: "15" },
    { url: "https://i.ibb.co/Zc2qX5N/f420f249-096b-4d5a-9805-37760bbe89af.jpg", title: "16" },
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
        Cabaña en Condominio
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
                    <p class="font-medium text-green-600">80</p>
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
                    <p class="font-medium text-green-600">1</p>
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
                    <p class="font-medium text-green-600">2</p>
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
          <p className="text-xl font-bold">$550.000 /m</p>
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

export default Propiedad2
