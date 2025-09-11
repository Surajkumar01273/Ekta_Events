import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaYoutube />, label: 'Youtube' },
  ];

  return (
    <footer
      className="bg-black bg-[url('/footer_img/footer-bg.png')] bg-cover bg-center text-white"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Upper Section */}
      <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Brand Info */}
        <div>
          {/* <img
            src="/nav-image/navlogo1.jpg"
            alt="Ekta Decoration Logo"
            className="h-[90px] w-[150px] rounded-md mb-4 shadow-lg"
          /> */}
          <p className='mb-6 font-bold text-2xl underline underline-offset-16 decoration-pink-700'>
            <span className='text-pink-800'>EKTA</span> <span className='text-pink-700'>Decoration</span>
          </p>
          <p className='text-sm text-gray-300 leading-relaxed mb-5'>
            For any event, balloon artists can craft stunning sculptures from
            favorite animals to themed decorations that match your celebration.
          </p>
          <div className='space-y-3'>
            <p className='flex items-start gap-2 text-gray-300 text-sm'>
              <IoLocationOutline className='text-white text-lg mt-[2px]' />
               249A G block, Ashok vihar - ||| extn. Gurgaon 122001
            </p>
            <Link
              to='tel:+919220586324'
              className='flex items-center gap-2 text-gray-300 text-sm hover:text-pink-700 transition-colors'
            >
              <FaPhone className='text-white' /> +91 9220586324
            </Link>
            <p className='flex items-center gap-2 text-gray-300 text-sm'>
              <MdEmail className='text-white' /> info@ektadecoration.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-4 relative after:content-[''] after:block after:w-30 after:h-[2px] after:bg-pink-700 after:mt-2">
            Quick Links
          </h3>
          <ul className='space-y-3 text-gray-300 text-sm'>
            <li>
              <Link to='/' className='hover:text-pink-700  transition-colors'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='hover:text-pink-700  transition-colors'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/our-gallery'
                className='hover:text-pink-700  transition-colors'
              >
                Our Gallery
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='hover:text-pink-700  transition-colors'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Decoration Services */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-4 relative after:content-[''] after:block after:w-28 after:h-[2px] after:bg-pink-700 after:mt-2">
            Decoration
          </h3>
          <ul className='space-y-3 text-gray-400 text-sm'>
            <li>
              <Link
                to='/adult-birthday'
                className='hover:text-pink-700 transition-colors'
              >
                Birthday Decoration
              </Link>
            </li>
            <li>
              <Link
                to='/anniversary-decoration'
                className='hover:text-pink-700  transition-colors'
              >
                Anniversary Decoration
              </Link>
            </li>
            <li>
              <Link
                to='/baby-shower'
                className='hover:text-pink-700  transition-colors'
              >
                Baby Shower & Welcome Baby
              </Link>
            </li>
            <li>
              <Link
                to='/banquet-hall'
                className='hover:text-pink-700  transition-colors'
              >
                Banquet Halls
              </Link>
            </li>
          </ul>
        </div>

        {/* Social media icons) */}
        <section>
           <p className='lg:text-center font-bold text-xl underline underline-offset-10 text-pink-700 decoration-pink-700'>Social Link</p>
          <div className=' text-zinc-300 text-sm'>
           
            {links.map((item, index) => (
              <div
                key={index}
                className={`flex items-center lg:justify-center gap-2 mb-6 mt-6 group`}
              >
                <Link to='#'>
                  <span className='text-white text-lg group-hover:text-pink-700 '>{item.icon}</span>
                </Link>
                <Link to='#'>
                  <span className='text-zinc-300 group-hover:text-pink-700 '>{item.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className='bg-black bg-opacity-80 border-t border-gray-700 py-4 pb-20 lg:pb-10 px-2 text-center text-xs text-gray-400'>
        © 2025 by Ekta Decoration. All Rights Reserved.{' '}
        <Link
          to='https://webralecon.com/'
          className='text-blue-400 hover:underline'
        >
          Designed By Webralecon India Pvt. Ltd.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
