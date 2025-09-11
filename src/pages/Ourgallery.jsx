import React from 'react';
import { Link } from 'react-router-dom';
import { ourGalleryData } from '../data';
import { Helmet } from 'react-helmet';
import CounterSection from '../components/CounterSection';

function Ourgallery() {
  const phoneNumber = '+919220586324';
  const message = 'I am interested in your service';

  return (
    <>
      <div>
        <Helmet>
          <title>Balloon Decoration Experts in Gurugram | +91 9220586324</title>
          <meta
            name='description'
            content='At Ekta Decoration, we bring your party vision to life with unique balloon decorations tailored for birthdays, weddings, corporate events, and more. Based in Gurugram, we offer on-time service, creative designs, and personalized customer support.'
          />
          <meta
            name='keywords'
            content='Event Decoration Gallery Gurgaon, Birthday Decoration Photos, Wedding Decoration Ideas, Kids Birthday Party Gallery, Anniversary Decoration Images, Baby Shower Decoration Pictures, Balloon Decoration Gallery, Creative Event Setup Photos, Party Decoration Ideas, Ekta Decoration Gallery'
          />

          <meta
            property='og:title'
            content='Decoration Gallery | Ekta Decoration – Birthday, Wedding & Event Decor in Gurgaon'
          />

          <meta
            property='og:description'
            content='Explore Ekta Decoration’s gallery – showcasing our creative balloon setups, birthday themes, wedding decorations, anniversary décor, baby shower styling, and elegant event decoration work in Gurgaon.'
          />

          <meta
            property='og:image'
            content='https://www.ektadecoration.com/home-image/adult3.jpg'
          />
          <meta
            property='og:url'
            content='https://www.ektadecoration.com/gallery'
          />
          <meta property='og:type' content='website' />

          <link
            rel='canonical'
            href='https://www.ektadecoration.com/gallery'
          />
          <meta name='robots' content='index, follow' />
        </Helmet>
        <hero>
          <div
            className='w-full h-[265px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center'
            style={{
              backgroundImage: "url('/ourgallery/ourgalleryhero.jpg')",
            }}
          >
            <div className='relative z-10 text-center text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Our Gallery
              </h1>
              <p className='text-sm md:text-base'>
                <span className='hover:underline cursor-pointer mr-6 font-bold'>
                  <Link to='/'>Home</Link>
                </span>
                <span className='mx-2 font-bold'>Our Gallery</span>
              </p>
            </div>
          </div>
        </hero>

        {/* ************       Section 1        *********** */}

        <section className='w-full px-4 py-8 bg-white'>
          <h2 className='text-4xl font-semibold text-center my-16'>
            Our{' '}
            <span className='text-pink-700 border-b-2 border-orange-pink-800 pb-1'>
              Gallery
            </span>
          </h2>

          <div className='flex justify-center flex-wrap gap-8'>
            {ourGalleryData.map((item) => (
              <div
                key={item.id}
                className='relative group w-[350px] md:w-[300px] h-[400px] overflow-hidden rounded-md shadow-md transition-transform duration-1000 hover:scale-110'
              >
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className='w-full h-full object-cover'
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
            ))}
          </div>
        </section>

        {/* *************      2nd Section       ************* */}

        <section className='bg-gray-50 pt-10 mt-10 pb-16 flex w-full justify-center'>
          <CounterSection />

          {/* <div className='max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-y-20  text-center w-full'>
            {stats.map((stat, index) => (
              <div key={index} className='relative'> */}
          {/* Line + Dot */}
          {/* <div className='flex flex-col items-center'>
                  <div className='w-1 h-16 bg-pink-700 mb-1'></div>
                  <div className='w-3 h-3 bg-pink-700 rounded-full mb-4'></div>
                </div> */}

          {/* Number */}
          {/* {index === 0 ? (
                  <h3 className='text-3xl font-bold text-pink-700'>
                    {client}+
                  </h3>
                ) : index === 1 ? (
                  <h3 className='text-3xl font-bold text-pink-700'>{events}+</h3>
                ) : index === 2 ? (
                  <h3 className='text-3xl font-bold text-pink-700'>{tems}+</h3>
                ) : (
                  <h3 className='text-3xl font-bold text-pink-700'>{Thems}+</h3>
                )} */}

          {/* Label */}
          {/* <p className='text-sm md:text-lg mt-3 text-zinc-500'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div> */}
        </section>
      </div>
    </>
  );
}

export default Ourgallery;
