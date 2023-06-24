"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
//Que aparesca el navbar al hacer scroll

  if (typeof window !== "undefined") {
    //This code is executed in the browser
    window.onscroll = function() {scrollFunction()};
 }
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").classList.add('shadow-sm');
      document.getElementById('navbar').classList.add('bg-white');
    } else {
      document.getElementById('navbar').classList.remove('shadow-sm');
      document.getElementById('navbar').classList.remove('bg-white');
    }
  }

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav id='navbar' className='w-full py-4 top-0 transition duration-300 ease-in-out z-40 fixed'>       
    <div className="flex-between px-4 sm:px-6">
      <div className="flex-start gap-3">
        {/* BURGER MENU */}
        <div className='flex relative'>
        <button
        type='button'
        onClick={() => setOpenNavbar(!openNavbar)}
        className='navbar_btn'
        > { openNavbar ? (
          <Image src="/assets/icons/close.svg" width={30} height={30} alt="logo" />
        ) : (
          <Image
            src='/assets/icons/menu2.svg'
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
          />
        )}
        </button>
        {openNavbar && (
              <div className='dropdown_navbar '>
                  <Link
                    href='/nuevapyme'
                    className='dropdown_link'
                    onClick={() => setOpenNavbar(false)}
                  >
                  <Image
                    src='/assets/icons/newBusinessIco.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-fill'
                  />
                    Creacion y Formalizacion de tu Empresa
                  </Link>
                
                <Link
                  href='/mkt'
                  className='dropdown_link'
                  onClick={() => setOpenNavbar(false)}
                >
                <Image
                    src='/assets/icons/marketingIco.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-fill'
                  />
                  Sitio Web y Marketing Digital
                </Link>
                <Link
                  href='/contable-legal'
                  className='dropdown_link'
                  onClick={() => setOpenNavbar(false)}
                >
                  <Image
                    src='/assets/icons/legalIco.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-fill'
                  />
                  Asesoria Contable y Legal
                </Link>
                <Link
                  href='/propiedades'
                  className='dropdown_link'
                  onClick={() => setOpenNavbar(false)}
                >
                  <Image
                    src='/assets/icons/realstateIco.svg'
                    alt='logo'
                    width={30}
                    height={30}
                    className='object-fill'
                  />
                  Corredora de Propiedades
                </Link>
              </div>
            )}
        </div>
        {/* LOGO */}
        <Link href='/' className='flex gap-2 flex-center' onClick={() => setOpenNavbar(false)}>
          <Image
            src='/assets/images/logoRSO.svg'
            alt='logo'
            width={80}
            height={60}
            className='object-contain'
          />
          <p className='logo_text'>Asesorias</p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/profile/misEmpresas' className='blue_btn'>
              Mis Empresas
            </Link>
            <Link href='/profile/misSitios' className='blue_btn'>
              Mis Sitios
            </Link>
            <Link href='/profile/misPropiedades' className='blue_btn'>
              Mis Propiedades
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
                  className='blue_btn'
                >
                  Iniciar Sesion
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
              onClick={() => setToggleDropdown(!toggleDropdown)}
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
                  href='/profile/misEmpresas'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mis Empresas
                </Link>
                <Link
                  href='/profile/misSitios'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mis Sitios
                </Link>
                <Link
                  href='/profile/misPropiedades'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mis Propiedades
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full blue_btn'
                >
                  Cerrar Sesión
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
                  className='blue_btn'
                >
                  iniciar Sesion
                </button>
              ))}
          </>
        )}
      </div>
    </div>
    </nav>
  );
};

export default Nav;