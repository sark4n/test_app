'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';



const Nav = () => {

  window.onscroll = function() {scrollFunction()}

  function scrollFunction() {
      if(document.getElementById('navbar')){
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
              document.getElementById('navbar').classList.add('shadow-sm');
              document.getElementById('navbar').classList.add('bg-white');
          }else{
              document.getElementById('navbar').classList.remove('shadow-sm');
              document.getElementById('navbar').classList.remove('bg-white');
          }
      }
  }

    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

    return (
    <nav id='navbar' className='w-full py-4 top-0 transition duration-300 ease-in-out z-40 fixed'>       
    <div className="flex-between px-4 sm:px-6">
        <Link href="/" className="flex gap-2 flex-center">
            <Image
                src="/assets/images/logoRSO.svg"
                width="80"
                height="60"
                className="object-contain"
            />
            <p className="logo_text">Asesorias</p>
        </Link>    

    {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            {session?.user ? 
            (<div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className="black_btn">
                    Crear Mensaje
                </Link>
                <button type='button' onClick={signOut} className='outline_btn'>
                    Salir
                </button>
                <Link href='/profile'>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
              />
            </Link>
            </div>) 
            :
            (<>
               {providers && 
               Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {signIn(provider.id);}}
                  className='black_btn'
                >
                  Iniciar Sesión
                </button>
               ))}
            </>
            )}            
        </div>

    {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
      {session?.user ? (
          <div className='flex'>
                <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mi Perfil
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Crear Mensaje
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Salir
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Iniciar Sesión
                </button>
              ))}
          </>
        )}
      </div>

    </div>
    </nav>
  )
}

export default Nav