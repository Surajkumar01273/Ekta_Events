import React from 'react';
import { Helmet } from 'react-helmet';

function Independence() {
  const decorations = [
    {
      img: '/independence/office1.jpg',
      title: ' Festive Tricolor Office Entrance',
      desc: 'A lively entrance display adorned with saffron, white, and green balloons, paper rosettes, origami birds, and lights, bringing a vibrant patriotic spirit to any celebration.',
    },
    {
      img: '/independence/office2.jpg',
      title: 'Balloon Flag Stage Display',
      desc: 'A bold and colorful stage backdrop featuring a balloon arrangement of the Indian tricolor with the Ashoka Chakra at the center, accented by small flags for an authentic festive touch.',
    },
    {
      img: '/independence/office3.jpg',
      title: 'Ballon Tricolor Office Entrance',
      desc: 'Tall tricolor balloon panels with clusters and arches at the entrance, offering a perfect photo backdrop for patriotic celebrations and events.',
    },
    {
      img: '/independence/office4.jpg',
      title: 'Ring Balloon Decoration',
      desc: 'Stylish Ground Balloon Decoration for Independence Day celebrations.',
    },
    {
      img: '/independence/office5.jpg',
      title: 'School Celebration Setup',
      desc: 'Colorful decorations for school Independence Day programs.',
    },
    {
      img: '/independence/office6.jpg',
      title: 'Stage Backdrop Decoration',
      desc: 'Glowing flag lights for an evening patriotic vibe.',
    },
    {
      img: '/independence/office7.jpg',
      title: 'Cultural Stage Decor',
      desc: 'Perfect for cultural programs and performances.',
    },
    {
      img: '/independence/office8.jpg',
      title: 'Office Celebration Decor',
      desc: 'Professional yet festive decoration for office events.',
    },
    {
      img: '/independence/office9.jpg',
      title: 'Office Independence Day Setup',
      desc: 'Office Independence Day celebration arrangements.',
    },
    {
      img: '/independence/office10.jpg',
      title: 'Tricolor Kite Display',
      desc: "Eye-catching kite decoration representing India's pride.",
    },
    {
      img: '/independence/office11.jpg',
      title: 'Independence Day Balloon Decoration',
      desc: 'Fun and colorful photo booth for guests.',
    },
    {
      img: '/independence/office12.jpg',
      title: 'Flag TriColor Decoration',
      desc: 'Patriotic flag pole arrangement for ceremonies.',
    },
  ];

  return (
    <section className='py-8 bg-gradient-to-r from-orange-50 via-white to-green-50 mt-2'>
      <Helmet>
        <title>Independence Day Decoration in Gurugram | +91 9220586324</title>

        <meta
          name='description'
          content='Celebrate Independence Day with Ekta Decoration’s patriotic décor! We create stunning tricolor balloon setups, office & society decorations, and flag hoisting event styling across Gurugram for a memorable celebration.'
        />

        <meta
          name='keywords'
          content='Independence Day Decoration Gurgaon, Tricolor Balloon Decoration, Patriotic Theme Decor, Office Independence Day Decoration, Society Flag Hoisting Setup, Independence Day Event Styling Gurgaon, Balloon & Flower Decoration, Creative Tricolor Decoration, Corporate Independence Day Decor, National Festival Decoration'
        />

        <meta
          property='og:title'
          content='Independence Day Decoration in Gurgaon | Ekta Decoration – Patriotic Balloon & Event Decor Experts'
        />

        <meta
          property='og:description'
          content='Celebrate the spirit of freedom with Ekta Decoration! We provide creative tricolor balloon setups, office & society decorations, and patriotic event décor services in Gurgaon for unforgettable Independence Day celebrations.'
        />

        <meta
          property='og:image'
          content='https://www.ektadecoration.com/independence/office1.jpg'
        />

        <meta
          property='og:url'
          content='https://www.ektadecoration.com/independenceday'
        />

        <meta property='og:type' content='website' />

        <link
          rel='canonical'
          href='https://www.ektadecoration.com/independenceday'
        />
        <meta name='robots' content='index, follow' />
      </Helmet>

      <div className='max-w-7xl mx-auto px-4'>
        {/* Main Title */}
        <h2 className='text-lg md:text-3xl md:text-center font-bold mb-10 text-green-700'>
          Independence Day Decorations
        </h2>
        <p className=' text-black rounded-md mb-10 max-w-2xl mx-auto py-4 px-10 bg-gradient-to-r from-orange-500 via-white to-green-500 '>
          Celebrate India's Independence Day with vibrant and patriotic
          decorations. From balloon arches to stunning stage setups, here’s our
          collection to make your event truly special.
        </p>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {decorations.map((item, index) => (
            <div
              key={index}
              className='group rounded-xl overflow-hidden shadow-lg'
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-64 object-cover transform group-hover:scale-110 transition duration-500'
              />

              {/* Overlay */}
              <div className='inset-0 bg-gradient-to-r from-orange-200 via-white to-green-200 transition duration-300 p-4'>
                <h3 className='text-black text-lg font-bold'>{item.title}</h3>
                <p className='text-black text-sm'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Independence;
