import React from 'react'

const posts = [

  {
    title: '@asesoriasrso',
    href: 'https://www.instagram.com/asesoriasrso',
    category: { name: 'Instagram', href: 'https://www.instagram.com/asesoriasrso', color: 'bg-pink-100 text-pink-800' },
    description:
      'Únete a nuestra comunidad en Instagram y mantente al día con las últimas actualizaciones. ¡Síguenos ahora!',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },

  {
    title: '+56 9 2249 1856',
    href: 'https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20servicios.',
    category: { name: 'WhatsApp', href: 'https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20servicios.', color: 'bg-green-100 text-green-800' },
    description: 'Puedes contactarnos por WhatsApp o a nuestro correo electronico asesorias.rso@gmail.com,',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },

  {
    title: 'Asesorias RSO',
    href: 'https://www.facebook.com/asesoriasrso',
    category: { name: 'Facebook', href: 'https://www.facebook.com/asesoriasrso', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Únete a nuestra comunidad en Facebook y mantente al día con las últimas actualizaciones. ¡No te lo puedes perder!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contacto = () => {
  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className=""> 
          <h1 className='head_text text-left'>
            Contáctanos
          </h1>
          <p className='desc text-left max-w-md py-4'>
            ¿Te interesa alguno de nuestros servicios ? No dudes en contactarnos.
          </p>
        </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                {/* <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Contacto