import React from 'react';
// import RecentPost from '../../components/RecentPost';
import {blogsdetals1, recentPosts2 } from '../../data';
import SearchTag from '../../components/SearchTag';
import BlogDetals from '../../components/BlogDetals';

const Blog1 = ({ id = 1 }) => {
  // const blog = blogsdetals1.find((b) => b.id === id);
  return (
    <>
    <BlogDetals id={1} blogsdetals={blogsdetals1} recentPosts={recentPosts2}/>
  
      <div className='bg-zinc-100 p-4 w-full max-w-7xl mx-auto my-10'>
        <SearchTag />
      </div>
    </>
  );
};

export default Blog1;
