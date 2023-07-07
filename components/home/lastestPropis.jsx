import Link from "next/link"

const LastestPropis = () => {
  return (
    <div class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* PROPIEDAD1 */}
      <Link href="propiedades\cabanaCondominio" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-100 focus:outline-none focus:ring focus:ring-blue-100">
      <img
        alt="Home"
        src="\assets\images\propiedades\Casa Condominio Consolidado\fe85faca-54f0-4668-8bfe-232b81f39eac.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
    
      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
                <dd class="text-sm text-gray-500">$1.200.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Maria Pinto, Chile</dd>
          </div>
        </dl>
    
        <div class="mt-6 flex items-center gap-8 text-xs">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Parking</p>
    
              <p class="font-medium">2 spaces</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Baños</p>
    
              <p class="font-medium">2 rooms</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Habitacion</p>
              <p class="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    {/* PROPIEDAD 2 */}
      <Link href="propiedades\casaCondominioConsolidado" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-100 focus:outline-none focus:ring focus:ring-blue-100">
      <img
        alt="Home"
        src="assets\images\propiedades\Cabaña Condominio\1fbccdf0-7221-4cfc-9a7e-efa5aa601075.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
    
      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
    
            <dd class="text-sm text-gray-500">$550.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Maria Pinto, Chile</dd>
          </div>
        </dl>
    
        <div class="mt-6 flex items-center gap-8 text-xs">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Parking</p>
    
              <p class="font-medium">2 spaces</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Baños</p>
    
              <p class="font-medium">2 rooms</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Habitacion</p>
              <p class="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    {/* PROPIEDAD 3 */}
      <Link href="propiedades\casaSectorIbacache" class="border block rounded-lg p-4 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-100 focus:outline-none focus:ring focus:ring-blue-100">
      <img
        alt="Home"
        src="assets\images\propiedades\Casa Sector Ibacache\a35a0145-1ef6-4a57-8563-5723048937f1.jpg"
        class="h-56 w-full rounded-md object-cover"
      />
    
      <div class="mt-2">
        <dl>
          <div>
            <dt class="sr-only">Precio</dt>
    
            <dd class="text-sm text-gray-500">$550.000 CLP /m</dd>
          </div>
    
          <div>
            <dt class="sr-only">Ubicación</dt>
    
            <dd class="font-medium">Maria Pinto, Chile</dd>
          </div>
        </dl>
    
        <div class="mt-6 flex items-center gap-8 text-xs">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Parking</p>
    
              <p class="font-medium">2 spaces</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Baños</p>
    
              <p class="font-medium">2 rooms</p>
            </div>
          </div>
    
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              class="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
    
            <div class="mt-1.5 sm:mt-0">
              <p class="text-gray-500">Habitacion</p>
              <p class="font-medium">4 rooms</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default LastestPropis