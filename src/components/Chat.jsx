import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Chat = () => {
  const phoneNumber = '+919220586324';
  const message = 'I am interested in your service';
  return (
    <>
      <div className='hidden md:block fixed bottom-0 md:bottom-20 md:right-2 z-50'>
        <div className='flex md:flex-col  md:gap-y-10 md:items-end justify-between md:justify-end'>
          <span className='bg-pink-400 p-4 rounded-xl'>
            <Link to='tel:+919220586324'>
              <FaPhone className='text-white text-2xl mt-[5px]' />
            </Link>
          </span>

          <span className='bg-pink-400 p-4 rounded-xl text-center'>
            <Link
              to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`}
            >
              <FaWhatsapp className='text-white text-3xl mt-[5px]' />
            </Link>
          </span>
        </div>
      </div>

      {/* Mobile WhatsApp & Call Now */}
      <div className='md:hidden flex justify-around fixed bottom-0 z-50 bg-zinc-200 w-full py-3'>
        <Link
          to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`}
          className='bg-green-500 p-2 rounded-full text-center items-center justify-center gap-2 text-sm font-medium'
        >
          <FaWhatsapp className='text-white text-2xl' />
        </Link>
        <Link
          to='tel:+919220586324'
          className='p-2 bg-green-500 rounded-full text-center flex items-center justify-center gap-2 text-sm font-medium'
        >
          <FaPhone className='text-white text-2xl' />
        </Link>
      </div>
    </>
  );
};

export default Chat;
