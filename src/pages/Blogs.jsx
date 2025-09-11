import React, { useState } from 'react';
import { blogsData } from '../data';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredBlogs = searchTerm
    ? blogsData.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogsData; //
    

  const handleClearSearch = () => {
    setSearchTerm(''); //
    
  };

  return (
    <div className='px-30 py-20'>
      <div className='flex justify-center mb-20 gap-2'>
        
        
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

      <div className='mt-4 flex gap-4'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className='border p-4 mb-3 rounded shadow h-[400px]'
            >
              <h2 className='text-xl font-bold'>{blog.title}</h2>
              <p>{blog.content.substring(0, 120)}...</p>
            </div>
          ))
        ) : (
          <p className='text-center text-5xl w-full mt-10 h-[100px]'>
            No Blogs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
