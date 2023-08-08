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
            <p className='sm:flex hidden font-inter font-extrabold text-lg text-black tracking-wide'>Asesorias</p>
          </Link>
        </div>
        {/* BOTON DE CONTACTO */}
        <div
          className="sm:mr-4 mr-2 ">
        <Link
            href='https://wa.me/+56922491856?text=Hola,%20quisiera%20consultar%20por%20servicios.'
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-black sm:px-5 px-2 py-2 first-line:text-base font-medium text-white hover:bg-green-600"
          >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="21" 
          height="21" 
          fill="currentColor" 
          className="bi bi-whatsapp mr-2" 
          viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
            Contactanos
          </Link>
        </div>

{/* User Profile Navigation */}
        {/* <div className='flex relative px-4 sm:px-6 '>
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
        </div> */}
      </div> 
    </nav>
  );
};

export default Nav;