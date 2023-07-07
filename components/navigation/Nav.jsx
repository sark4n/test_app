"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {

//NAVBAR SCROLL
  if (typeof window !== "undefined") {
    //This code is executed in the browser
    window.onscroll = function() {scrollFunction()};
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").classList.add('shadow-xl');
      document.getElementById('navbar').classList.add('bg-white');
    } else {
      document.getElementById('navbar').classList.remove('shadow-xl');
      document.getElementById('navbar').classList.remove('bg-white');
    }
  }
// USER MENU
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
//USER DROPDOWN MENU
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userdropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userdropdownRef.current && !userdropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const UsertoggleDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

// NAVBAR MENU
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavbartoggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (

    <nav id='navbar' className='w-full top-0 transition duration-300 ease-in-out z-40 fixed'>       
      <div className="flex-between ">
{/* User Normal Navigation */}
        <div className="flex-start gap-3">
          {/* BURGER MENU */}
          <div className='flex relative py-1 pl-4 sm:pl-6'>
          <button
          type='button'
          onClick={NavbartoggleDropdown}
          className='navbar_btn'
          >           
          <Image
            src='/assets/icons/menu.svg'
            alt='menu'
            width={20}
            height={20}
            className='object-contain'
          />
          </button>

          {isDropdownOpen && (
                <div ref={dropdownRef} className={`absolute z-40 left-0 top-0 min-w-[380px] w-full h-screen bg-white flex flex-col gap-2 justify-start items-start p-1`}>
                    {/* LOGO&MENU */}
                    <div className='flex relative pl-3 sm:pl-5 pb-3'>
                    <button
                    type='button'
                    onClick={NavbartoggleDropdown}
                    className='navbar_btn'
                    >           
                    <Image
                      src='/assets/icons/menu.svg'
                      alt='menu'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                    </button>
                    <Link href='/' onClick={NavbartoggleDropdown} className='flex gap-2 flex-center pl-3'>
                      <Image
                        src='/assets/images/RSOlogo.svg'
                        alt='logo'
                        width={60}
                        height={40}
                        className='object-contain'
                      />
                      <p className='font-inter font-extrabold text-lg text-black tracking-wide'>Asesorias</p>
                    </Link>
                    </div>
                    {/* DROPDOWN MENU */}
                    <Link
                      href='/nuevapyme'
                      className='dropdown_link'
                      onClick={NavbartoggleDropdown}
                    >
                    <img 
                        src="https://i.ibb.co/tZq7Gsw/icono-Tienda2.png" 
                        className="w-10" 
                        width="512" 
                        height="512" 
                        alt="icono tienda"/> Creacion y Formalizacion de tu Empresa
                    </Link>                  
                    <Link
                      href='/mkt'
                      className='dropdown_link'
                      onClick={NavbartoggleDropdown}                  
                    >
                    <img 
                      src="https://i.ibb.co/HVp6zx2/icono-Redes2.png" 
                      className="w-10" 
                      width="512" 
                      height="512" 
                      alt="icono redes"/> Sitio Web y Marketing Digital
                    </Link>
                    <Link
                      href='/contable-legal'
                      className='dropdown_link'
                      onClick={NavbartoggleDropdown}
                    >
                    <img 
                    src="https://i.ibb.co/hmKxsyF/contabilidad.png" 
                    className="w-10" 
                    width="512" 
                    height="512" 
                    alt="icono legal y contable"/>Asesoria Contable & Legal
                    </Link>
                    <Link
                      href='/propiedades'
                      className='dropdown_link'
                      onClick={NavbartoggleDropdown}
                    >
                    <img 
                      src="https://i.ibb.co/gz5dgCZ/icono-Corredor.png" 
                      className="w-10" 
                      width="512" 
                      height="512" 
                      alt="icono corredor"/>Corredora de Propiedades
                    </Link>
                </div>
              )}

          </div>
          {/* LOGO */}
          <Link href='/' className='flex gap-2 flex-center py-1'>
            <Image
              src='/assets/images/RSOlogo.svg'
              alt='logo'
              width={60}
              height={40}
              className='object-contain'
            />
            <p className='font-inter font-extrabold text-lg text-black tracking-wide'>Asesorias</p>
          </Link>
        </div>
{/* User Profile Navigation */}
        <div className='flex relative px-4 sm:px-6 '>
          {session?.user ? (
            <div ref={userdropdownRef} className='flex '>
              <Image
                src={session?.user.image}
                width={32}
                height={32}
                className='rounded-full'
                alt='profile'
                onClick={UsertoggleDropdown}
              />

            {isUserDropdownOpen && (
                <div className='dropdown'>
                  <Link
                    href='/profile'
                    className='dropdown_link'
                    onClick={UsertoggleDropdown}
                  >
                    Mi Perfil
                  </Link>
                  <Link
                    href='/profile/misEmpresas'
                    className='dropdown_link'
                    onClick={UsertoggleDropdown}
                  >
                    Mis Empresas
                  </Link>
                  <Link
                    href='/profile/misSitios'
                    className='dropdown_link'
                    onClick={UsertoggleDropdown}
                  >
                    Mis Sitios
                  </Link>
                  <Link
                    href='/profile/misPropiedades'
                    className='dropdown_link'
                    onClick={UsertoggleDropdown}
                  >
                    Mis Propiedades
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      {UsertoggleDropdown}
                      signOut();
                    }}
                    className='mt-5 w-full black_btn'
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
  );
};

export default Nav;