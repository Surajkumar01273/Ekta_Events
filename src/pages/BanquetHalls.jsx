import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { categories, banquetHallsSection, progressData } from '../data';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BanquetHalls = () => {
  const phoneNumber = '+919220586324';
  const message = 'I am interested in your service';
  const [progressValues, setProgressValues] = useState(
    progressData.map(() => 0)
  );
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(progressData.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, []);

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && progressValues[index] === 0) {
            let current = 0;
            const interval = setInterval(() => {
              current += 1;
              setProgressValues((prev) => {
                const updated = [...prev];
                updated[index] = current;
                return updated;
              });
              if (current >= progressData[index].percent) {
                clearInterval(interval);
              }
            }, 15);
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refs]);

  return (
    <div>
      <Helmet>
        <title>Banquet Halls Ballon Decoration Near me| +91 9220586324</title>
        <meta
          name='description'
          content='Explore our exquisite banquet hall decorations for weddings and events. From elegant setups to stunning backdrops, we create memorable experiences.'
        />
        <meta
          name='keywords'
          content='Banquet Hall in Gurgaon, Luxury Banquet Hall, Wedding Banquet Gurgaon, Party Halls for Rent, Anniversary Celebration Banquet, Birthday Party Halls Gurgaon, Corporate Event Banquet Hall, Baby Shower Banquet Setup, Elegant Banquet Decoration Gurgaon, Event Venue Gurgaon'
        />

        <meta
          property='og:title'
          content='Banquet Hall in Gurgaon | Ekta Decoration – Luxury Event & Party Venue Experts'
        />

        <meta
          property='og:description'
          content='Host your special occasions at Ekta Decoration’s luxury banquet halls in Gurgaon. Perfect for weddings, birthdays, anniversaries, and corporate events with elegant décor, spacious venues, and professional event management.'
        />

        <meta
          property='og:image'
          content='https://www.ektadecoration.com/home-image/adult5.jpg'
        />
        <meta
          property='og:url'
          content='https://www.ektadecoration.com/banquet-hall'
        />
        <meta property='og:type' content='website' />

        <link
          rel='canonical'
          href='https://www.ektadecoration.com/banquet-hall'
        />
        <meta name='robots' content='index, follow' />
      </Helmet>
      {/* Banner */}
      <div
        className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
        style={{ backgroundImage: "url('/adult/adult1.jpg')" }}
      >
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Banquet Halls</h1>
          <p className='text-sm md:text-base'>
            <span className='hover:underline cursor-pointer mr-6 font-bold'>
              <Link to='/'>Home</Link>
            </span>
            <span className='mx-2 font-bold'>Banquet Halls</span>
          </p>
        </div>
      </div>

      {/* Sidebar + Swiper */}
      <section className='pt-8 md:pt-16 mb-10'>
        <div className='flex flex-col md:flex-row items-start justify-between px-2 md:px-16'>
          {/* Sidebar */}
          <div className='bg-pink-700 flex flex-col text-white w-full md:w-[350px] h-[550px] p-4  mb-6 md:mb-0'>
            {categories.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className='font-semibold bg-blue-350 hover:bg-blue-500 p-4 cursor-pointer'
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Swiper */}
          <div className='w-full md:w-[1050px] px-0 md:pl-4'>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              loop={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {banquetHallsSection.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className='relative group'>
                    <img
                      src={card.image.src}
                      alt={card.title}
                      className='object-cover object-center md:w-[500px] md:h-[450px]'
                    />
                    <Link
                      to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`}
                    >
                      <p
                        className='absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-pink-500 rounded-md 
                            opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out font-semibold'
                      >
                        Book Now
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <h2 className='mt-14 font-bold text-2xl pl-4 md:pl-0 md:text-5xl text-zinc-800'>
              Banquet Halls
            </h2>
          </div>
        </div>
      </section>

      {/* Animated Progress Cards */}
      <section className='px-4 pb-10 pt-6'>
        <div className='pb-10 lg:mr-10'>
          <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-6'>
            {progressData.map((item, index) => (
              <div
                key={index}
                ref={refs[index]}
                className='w-full border-zinc-300 border max-w-[326px] flex flex-col items-center justify-center h-[300px] p-6 bg-pink-300 shadow-xl rounded-md text-center'
              >
                <h2 className='text-3xl font-bold mb-4'>
                  {progressValues[index]}%
                </h2>

                <div className='relative w-full h-2 bg-white border border-black overflow-hidden mb-4'>
                  <div
                    className='absolute top-0 left-0 h-full bg-black transition-all duration-300'
                    style={{ width: `${progressValues[index]}%` }}
                  ></div>
                </div>

                <p className='text-lg font-semibold'>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Image Row */}
          <div className='flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-6 pt-10'>
            <div className='max-w-[500px] w-full relative group'>
              <img
                src='/home-image/banquet4.jpg'
                alt='banquet-img'
                className='w-full h-auto object-cover rounded-md'
              />
              <Link
                to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <p className='absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-pink-500 rounded-md opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out font-semibold'>
                  Book Now
                </p>
              </Link>
            </div>
            <div className='max-w-[500px] w-full relative group'>
              <img
                src='/home-image/banquet3.jpg'
                alt='banquet-img'
                className='w-full h-auto object-cover rounded-md'
              />
              <Link
                to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
              >
                <p className='absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-pink-500 rounded-md opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out font-semibold'>
                  Book Now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanquetHalls;
