import Link from "next/link"

const LastestPropis = () => {
  return (
    <div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* PROPIEDAD1 */}
    <Link href="propiedades\casaCondominioConsolidado" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-green-50 hover:border-green-50 focus:outline-none focus:ring focus:ring-green-100">
      <img
        alt="Home"
        src="\assets\images\propiedades\CasaCondominioConsolidado\fe85faca-54f0-4668-8bfe-232b81f39eac.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
      <div class="mt-2">
        {/* PRECIO Y UBICACION */}
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
                <dd class="text-sm text-gray-500">$1.200.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Arriendo en Maria Pinto, Chile.</dd>
          </div>
        </dl>
        {/* CARACTERISTICAS */}
        <div class="mt-6 flex items-center gap-4 text-xs">
          {/* ITEM1 */}
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div class="mt-1.5 sm:mt-0 flex gap-1">
            <img
              alt="mt2"
              src="\assets\icons\mt2.svg"
              class="h-5 w-5"
            />
              <p class="font-medium text-green-600">240 mt2</p>
            </div>
            <div>            
            <p class="text-gray-500">Construidos</p>
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
        </div>
      </div>
    </Link>
    {/* PROPIEDAD 2 */}
    <Link href="propiedades\cabanaCondominio" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-green-50 hover:border-green-50 focus:outline-none focus:ring focus:ring-green-100">
      <img
        alt="Home"
        src="assets\images\propiedades\Cabaña Condominio\1fbccdf0-7221-4cfc-9a7e-efa5aa601075.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
      <div class="mt-2">
        {/* PRECIO Y UBICACION */}
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
                <dd class="text-sm text-gray-500">$550.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Arriendo en Maria Pinto, Chile.</dd>
          </div>
        </dl>
        {/* CARACTERISTICAS */}
        <div class="mt-6 flex items-center gap-4 text-xs">
          {/* ITEM1 */}
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div class="mt-1.5 sm:mt-0 flex gap-1">
            <img
              alt="mt2"
              src="\assets\icons\mt2.svg"
              class="h-5 w-5"
            />
              <p class="font-medium text-green-600">80 mt2</p>
            </div>
            <div>            
            <p class="text-gray-500">Construidos</p>
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
        </div>
      </div>
    </Link>
    {/* PROPIEDAD 3 */}
    <Link href="propiedades\casaSectorIbacache" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-green-50 hover:border-green-50 focus:outline-none focus:ring focus:ring-green-100">
      <img
        alt="Home"
        src="assets\images\propiedades\Casa Sector Ibacache\a35a0145-1ef6-4a57-8563-5723048937f1.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
      <div class="mt-2">
        {/* PRECIO Y UBICACION */}
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
                <dd class="text-sm text-gray-500">$550.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Arriendo en Bollenar, Maria Pinto.</dd>
          </div>
        </dl>
        {/* CARACTERISTICAS */}
        <div class="mt-6 flex items-center gap-4 text-xs">
          {/* ITEM1 */}
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div class="mt-1.5 sm:mt-0 flex gap-1">
            <img
              alt="mt2"
              src="\assets\icons\mt2.svg"
              class="h-5 w-5"
            />
              <p class="font-medium text-green-600">90 mt2</p>
            </div>
            <div>            
            <p class="text-gray-500">Construidos</p>
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
        </div>
      </div>
    </Link>
    </div>
  )
}

export default LastestPropis