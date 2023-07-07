
const Propiedad1 = () => {
  return (
<section>
  <div class="relative mx-auto max-w-screen-xl px-4 py-8">
    <div>
      <h1 class="text-2xl font-bold lg:text-3xl">Simple Clothes Basic Tee</h1>

      <p class="mt-1 text-sm text-gray-500">SKU: #012345</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
      <div class="lg:col-span-3">
        <div class="relative mt-4">
          <img
            alt="Tee"
            src="\assets\images\propiedades\Casa Condominio Consolidado\fe85faca-54f0-4668-8bfe-232b81f39eac.jpg"
            class="h-72 w-full rounded-xl object-cover lg:h-[540px]"
          />

          <div
            class=" absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>

            <span class="ms-1.5 text-xs"> Toca para agrandar </span>
          </div>
        </div>

        <ul class="mt-1 flex gap-1">
          <li>
            <img
              alt="Tee"
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-16 w-16 rounded-md object-cover"
            />
          </li>

          <li>
            <img
              alt="Tee"
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-16 w-16 rounded-md object-cover"
            />
          </li>

          <li>
            <img
              alt="Tee"
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-16 w-16 rounded-md object-cover"
            />
          </li>

          <li>
            <img
              alt="Tee"
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-16 w-16 rounded-md object-cover"
            />
          </li>
        </ul>
      </div>

      <div class="lg:sticky lg:top-0">
        <form class="space-y-4 lg:pt-8">
          <fieldset>
            <legend class="text-lg font-bold">Material</legend>
          </fieldset>

          <div class="rounded border bg-gray-100 p-4">
            <p class="text-sm">
              <span class="block"> Pay as low as $3/mo with 0% APR. </span>

              <a href="" class="mt-1 inline-block underline"> Find out more </a>
            </p>
          </div>

          <div>
            <p className="font-semibold">Valor Arriendo</p>
            <p class="text-xl font-bold">$1.200.000</p>
          </div>

          <button
            type="submit"
            class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
          >
            Me interesa
          </button>

          <button
            type="button"
            class="hidden w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Notify when on sale
          </button>
        </form>
      </div>

      <div class="lg:col-span-3">
        <div class="prose max-w-none">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam
            eos iusto repellat blanditiis voluptate aspernatur, quae nemo
            exercitationem cum debitis! Sint consectetur laborum tempora
            repellat odit. Impedit quasi reprehenderit harum illum sequi
            provident soluta cum quisquam odit possimus? Officia illum saepe
            magnam nostrum, officiis placeat iure itaque cumque voluptate?
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Propiedad1
