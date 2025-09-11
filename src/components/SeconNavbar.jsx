import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { MdArrowDropUp } from 'react-icons/md';

const SecondNavbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [navcolor, setNavColor] = useState(false);

  const handleNavcolor = () => {
    if (
      location.pathname === '/adult-birthday' ||
      location.pathname === '/anniversary-decoration' ||
      location.pathname === '/baby-shower' ||
      location.pathname === '/kids-birthday' ||
      location.pathname === '/banquet-hall' ||
      location.pathname === '/just-married' ||
      location.pathname === '/room-decoration'
    ) {
      setNavColor(true);
    } else {
      if (
        location.pathname === '/our-gallery' ||
        location.pathname === '/contact' ||
        location.pathname === '/about'
      ) {
        setNavColor(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= 300) {
        setShowNavbar(true);
      } else if (scrollY <= 80) {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 fixed top-0 left-0 right-0 z-50 bg-white shadow-lg px-4 md:px-6 py-4 md:py-2 flex items-center justify-between ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className='md:flex flex-col items-center'>
        <img
          src='/nav-image/navlogo.png'
          alt='nav-log'
          className='w-36 h-20 lg:w-45 lg:h-35'
        />
        <span className='flex justify-center items-center space-x-2'>
          <FaPhone className='text-pink-400 text-xl mt-1' />
          <Link to='tel: +919220586324'>
            <p className='text-pink-400 text-xl lg:text-[24px]  font-bold'>
              9220586324
            </p>
          </Link>
        </span>
      </div>

      {/* Center - Nav Links (desktop only) */}

      <div className='hidden lg:flex gap-16 font-semibold text-gray-800 text-2xl]'>
        <Link
          onMouseEnter={handleNavcolor}
          to='/'
          className={
            location.pathname === '/'
              ? 'text-pink-500 underline underline-offset-4 text-2xl'
              : 'hover:text-pink-500 hover:underline underline-offset-4 text-2xl'
          }
        >
          Home
        </Link>
        <Link
          onMouseEnter={handleNavcolor}
          to='/about'
          className={
            location.pathname === '/about'
              ? 'text-pink-500 underline underline-offset-4 text-2xl'
              : 'hover:text-pink-500 hover:underline underline-offset-4 text-2xl'
          }
        >
          About
        </Link>

        {/* Activities Dropdown */}

        <div className='relative group'>
          <button className='text-2xl font-semibold text-gray-800'>
            <Link
              className={`
                navcolor ? 'text-pink-400' : 'text-black' flex items-center hover:text-pink-600`}
            >
              Decoration
              <MdArrowDropDown />
            </Link>
          </button>
          <div
            onMouseEnter={handleNavcolor}
            className='absolute top-full left-0 mt-2 py-4 bg-white shadow-lg rounded-md w-60 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 invisible group-hover:visible'
          >
            <Link
              to='/birthday-decoration'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Birthday Decoration
            </Link>
            <Link
              to='/anniversary-decoration'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Anniversary Decoration
            </Link>
            <Link
              to='/baby-shower'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Baby Shower Decoration
            </Link>
            <Link
              to='/kids-birthday'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Kids Birthday
            </Link>
            <Link
              to='/just-married'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Just Married
            </Link>

            <Link
              to='/banquet-hall'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Banquet Hall Decoration
            </Link>
            <Link
              to='/room-decoration'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Room Decoration
            </Link>
            <Link
              to='/independenceday'
              className='block px-4  text-gray-800 py-4 hover:text-pink-600 hover:bg-pink-100 text-sm'
            >
              Independence Day
            </Link>
          </div>
        </div>

        <Link
          onMouseEnter={handleNavcolor}
          to='/gallery'
          className={
            location.pathname === '/gallery'
              ? 'text-pink-500 underline underline-offset-6 text-2xl'
              : 'hover:text-pink-500 hover:underline underline-offset-6 text-2xl'
          }
        >
          Gallery
        </Link>

        <Link
          onMouseEnter={handleNavcolor}
          to='/blogs'
          className={
            location.pathname === '/contact'
              ? 'text-pink-500 underline underline-offset-4 text-2xl'
              : 'hover:text-pink-500 hover:underline underline-offset-4 text-2xl'
          }
        >
          Blogs
        </Link>

        <Link
          onMouseEnter={handleNavcolor}
          to='/contact'
          className={
            location.pathname === '/contact'
              ? 'text-pink-500 underline underline-offset-4 text-2xl'
              : 'hover:text-pink-500 hover:underline underline-offset-4 text-2xl'
          }
        >
          Contact
        </Link>
      </div>

      {/* Right - Contact & Button */}
      <div className='flex items-center gap-10'>
        <div className='hidden md:flex items-center gap-3'>
          <div className='bg-pink-400 p-3 rounded-full'>
            <FaPhone className='text-white' />
          </div>
          <div className='text-sm leading-tight'>
            <div className='text-gray-800'>PHONE:</div>
            <Link
              to='tel:+9220586324'
              className='text-gray-800 font-semibold text-lg'
            >
              +91 9220586324
            </Link>
          </div>
        </div>

        <Link to='/contact' className='hidden lg:block'>
          <button className='bg-pink-400 text-md text-white py-2 px-2 md:px-6 md:py-3 rounded-sm font-medium hover:bg-pink-600 transition'>
            Contact us
          </button>
        </Link>

        {/* Left - Hamburger */}
        <div
          className='text-2xl md:hidden cursor-pointer z-20'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className='text-black' />
        </div>
      </div>

      {/* Mobile Overlay */}

      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/60 z-10 md:hidden'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0  w-full bg-white shadow-lg z-30 flex flex-col gap-3 pb-20 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close (cross) button */}
        <div className='flex  justify-between px-4 bg-white'>
          <Link to='/'>
            <div className='flex flex-col items-center py-1'>
              <img src='/nav-image/navlogo.png' alt='' className='w-26' />
              <Link to='tel: +919220586324'>
                <p className='text-pink-400 text-sm font-bold  text-center'>
                  +91 9220586324
                </p>
              </Link>
            </div>
          </Link>
          <button
            className='text-lg text-gray-800 font-bold'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Mobile Links */}
        <div className='px-4 flex flex-col gap-y-2'>
          <Link
            to='/'
            className='text-gray-800 text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <hr className='' />
          <Link
            to='/about'
            className='text-gray-800 text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <hr className='mx-4' />

        {/* Expandable Activities Submenu */}

        <div className='flex flex-col gap-2 px-4'>
          <button
            className='text-gray-800 text-md flex justify-between items-center font-bold'
            onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
          >
            Decoration
            <span>
              {mobileSubmenuOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </span>
          </button>
          {mobileSubmenuOpen && (
            <div className='ml-2 flex flex-col gap-2'>
              <Link
                to='/birthday-decoration'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Birthday Decoration
              </Link>
              <Link
                to='anniversary-decoration'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Anniversary Decoration
              </Link>
              <Link
                to='/baby-shower'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Baby Shower Decoration
              </Link>
              <Link
                to='/kids-birthday'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Kids Birthday
              </Link>
              <Link
                to='/just-married'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Just Married
              </Link>

              <Link
                to='/banquet-hall'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Banquet Hall Decoration
              </Link>
              <Link
                to='/room-decoration'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Room Decoration
              </Link>
              <Link
                to='/independenceday'
                className='text-sm text-gray-800 bg-zinc-100 py-2 px-4'
                onClick={() => setMenuOpen(false)}
              >
                Independence Day
              </Link>
            </div>
          )}
        </div>
        <hr className='mx-4' />

        <div className='px-4 flex flex-col gap-y-4'>
          <Link
            to='/gallery'
            className='text-gray-800 text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Our Gallery
          </Link>
          <hr />
          <Link
            to='/blogs'
            className='text-gray-800 text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
          <hr />
          <Link
            to='/contact'
            className='text-gray-800 text-md font-bold'
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
