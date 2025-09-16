// BlogDetail.jsx
import React from "react";
import BlogDetals from "../../components/BlogDetals";
import SearchTag from "../../components/SearchTag";
import { blogsdetals2, recentPosts1 } from "../../data";

const Blog2 = () => {
 

  return (
    <>
    <BlogDetals id={2} blogsdetals={blogsdetals2} recentPosts={recentPosts1}/>
  
      <div className='bg-zinc-100 p-4 w-full max-w-7xl mx-auto my-10'>
        <SearchTag />
      </div>
    </>
  );
};

export default Blog2;
