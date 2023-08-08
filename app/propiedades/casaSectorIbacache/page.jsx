import Slider from "../components/slider"

const Propiedad3 = () => {
  const slides = [
    { url: "https://i.ibb.co/BnhqdMV/a35a0145-1ef6-4a57-8563-5723048937f1.jpg", title: "1" },
    { url: "https://i.ibb.co/LR21wCc/7944c9ee-deb2-4a83-8d44-47029991c6fa.jpg", title: "2" },
    { url: "https://i.ibb.co/GQnF6bg/8266ec43-bcb3-481e-bc0c-7e294e97b0cc.jpg", title: "3" },
    { url: "https://i.ibb.co/pwF2ChL/1925889a-835d-4875-adad-29246b6dd8d8.jpg", title: "4" },
    { url: "https://i.ibb.co/JvhKB5G/03ff333e-19b0-450c-b3b3-a1e8aee59ed2.jpg", title: "5" },
    { url: "https://i.ibb.co/BnhqdMV/a35a0145-1ef6-4a57-8563-5723048937f1.jpg", title: "6" },
    { url: "https://i.ibb.co/cNXqfLg/b6736337-b75b-4899-bb8f-59e30e98fca1.jpg", title: "7" },
    { url: "https://i.ibb.co/HzgxPqm/c1e2b5b2-bb37-4f76-8e76-4a536235e764.jpg", title: "8" },
    { url: "https://i.ibb.co/f8Ff7sg/c2f0c93e-251e-43b5-8e5a-66c6e00e8bdb.jpg", title: "9" },
    { url: "https://i.ibb.co/947FZQP/d821be36-118d-4305-ba4e-76f7fca5224a.jpg", title: "10" },
    { url: "https://i.ibb.co/vmgcBBM/e983b008-f111-4518-93fc-21c31e026d57.jpg", title: "11" },
    { url: "https://i.ibb.co/3d5vG8J/f5c3b70e-d962-4b92-9a96-098ce68ce87e.jpg", title: "12" },
    { url: "https://i.ibb.co/74Y0vgS/61330925-437d-4b5a-a42c-0171381fcc9a.jpg", title: "13" },
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
        Casa Sector Ibache
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
                    <p class="font-medium text-green-600">90</p>
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
                    <p class="font-medium text-green-600">3</p>
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
                    <p class="font-medium text-green-600">Cocina Americana</p>
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
    Casa nueva americana. Se encuentra al interior de parcela. 
    Agua y Luz con excelente conectividad a 20 mimutos de Casablanca y 45 de melipilla.
    </p>
  </div>
</section>
  )
}

export default Propiedad3
