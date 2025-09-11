import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { categories, roomDecorationSection, progressData } from '../data';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RoomDecoration = () => {
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
        <title>
          Room Balloon Decoration for Birthdays & Surprises +91 9220586324
        </title>
        <meta
          name='description'
          content='Transform any room into a magical celebration space with Ekta Decoration room balloon decoration services in Gurugram. Perfect for birthdays, anniversaries, romantic surprises, baby showers, and welcome-home moments, our team creates elegant and vibrant balloon setups tailored to your occasion. We offer ceiling balloons, balloon bouquets, heart-shaped decor, LED lights, and personalized messages to make your surprise unforgettable. Whether it’s a midnight celebration or a daytime event, we ensure on-time setup with high-quality materials and creative designs.'
        />
        <meta
          name='keywords'
          content='Room Decoration Gurgaon, Romantic Room Decoration, Birthday Room Decoration, Anniversary Room Setup, Just Married Room Decoration, Surprise Room Decoration Gurgaon, Balloon Decoration for Room, Flower Decoration for Room, Home Decoration Services Gurgaon, Hotel Room Decoration'
        />

        <meta
          property='og:title'
          content='Room Decoration in Gurgaon | Ekta Decoration – Romantic & Surprise Decor Experts'
        />

        <meta
          property='og:description'
          content='Make your celebrations special with Ekta Decoration! We provide creative room decorations with balloons, flowers, and themes for birthdays, anniversaries, just married couples, and surprise setups at home or hotels in Gurgaon.'
        />

        <meta
          property='og:image'
          content='https://www.ektadecoration.com/home-image/adult3.jpg'
        />
        <meta
          property='og:url'
          content='https://www.ektadecoration.com/room-decoration'
        />
        <meta property='og:type' content='website' />

        <link
          rel='canonical'
          href='https://www.ektadecoration.com/room-decoration'
        />
        <meta name='robots' content='index, follow' />
      </Helmet>
      {/* Banner */}
      <div
        className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
        style={{ backgroundImage: "url('/adult/adult1.jpg')" }}
      >
        <div className='relative z-10 text-center text-white'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Room Decoration
          </h1>
          <p className='text-sm md:text-base'>
            <span className='hover:underline cursor-pointer mr-6 font-bold'>
              <Link to='/'>Home</Link>
            </span>
            <span className='mx-2 font-bold'>Room Decoration</span>
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
              {roomDecorationSection.map((card, index) => (
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
              Room Decoration
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
                src='/home-image/room4.jpg'
                alt='banquet-img'
                className='w-full h-auto object-cover rounded-md'
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
            <div className='max-w-[500px] w-full relative group'>
              <img
                src='/home-image/room2.jpg'
                alt='banquet-img'
                className='w-full h-auto object-cover rounded-md'
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDecoration;
