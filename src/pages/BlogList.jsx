import React, { useState } from 'react';
import { blogsListdata
 } from '../data';
import { Link } from 'react-router-dom';
import SearchTag from '../components/SearchTag';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = searchTerm
    ? blogsListdata
.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogsListdata
; //

  const handleClearSearch = () => {
    setSearchTerm(''); //
  };
  console.log(filteredBlogs);

  return (
    <div className='lg:px-30 py-10'>
      <div className='flex justify-center mb-20 gap-2 px-4'>
        <input
          type='text'
          placeholder='Search blogs...'
          className='border p-2 w-[500px] rounded'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          onClick={handleClearSearch}
          className='bg-red-500 text-white px-4 rounded hover:bg-red-600 cursor-pointer'
        >
          Clear
        </button>
      </div>

      <div className='rounded-lg px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 rounded-lg'>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className='mb-3 w-full rounded-lg bg-pink-100 overflow-hidden'
              >
                <div>
                  <Link to={blog.link}>
                    <img
                      src={blog.image.src}
                      alt={blog.image.alt}
                      className='h-[150px] md:h-[300px] w-full rounded-t-lg transition-all duration-500 hover:scale-105'
                    />
                  </Link>
                </div>
                <div className='p-2 lg:px-4'>
                  <div className='md:h-[150px]'>
                    <Link to={blog.link}>
                      <h2 className='text-lg md:text-2xl font-semibold md:font-bold py-1 lg:py-4 text-zinc-800'>
                        {blog.title}
                      </h2>
                    </Link>
                    <p className='text-zinc-700 text-lg hidden md:block'>
                      {blog.content.substring(0, 80)}...
                    </p>
                  </div>
                  <div className='flex justify-between items-cente py-4'>
                    <div className='flex justify-center items-center gap-2'>
                      <p className='text-xs text-gray-500'>Date : {blog.date}</p>
                      <span className='h-3 w-[1px] bg-zinc-400'></span>
                      <p className='text-xs text-gray-500'>Time : {blog.time}</p>
                    </div>
                    <Link to={blog.link}>
                      <button className='bg-pink-500 text-xs md:text-sm text-white px-2 md:px-4 font-semibold py-2 rounded hover:bg-pink-600 cursor-pointer'>
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='lg:ml-[450px] text-xl md:text-3xl lg:text-5xl w-full my-20'>
              No Blogs found.
            </p>
          )}
        </div>
      </div>
      <div className='py-10 lg:py-20 px-4 lg:px-0'>
      <SearchTag />
      </div>
    </div>
  );
};

export default BlogList;
