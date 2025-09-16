import React from 'react';
import RecentPost from '../components/RecentPost';
import { Link } from 'react-router-dom';
// import { recentPosts} from '../data';

const BlogDetals = ({id, blogsdetals, recentPosts}) => {
  const blog = blogsdetals.find((b) => b.id === id);
  return (
    <>
      <div className='max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left Section - Main Blog */}
        <div className='md:col-span-2'>
          <div className='w-full'>
            <img
              src={blog.image.src}
              alt={blog.image.alt}
              className='w-full h-[150px] lg:h-[350px] lg:rounded-xl'
            />
          </div>

          <h1 className='text-xl md:text-3xl font-bold mt-6'>
            {blog.title}
          </h1>

          <div className='mt-6 space-y-4'>
            {blog.content.map((section, index) => {
              if (section.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className='text-xl md:text-2xl font-semibold mt-6 text-zinc-800'
                  >
                    {section.text}
                  </h2>
                );
              }
               if (section.type === 'link') {
                return (
                  <Link
                  to={section.link}
                    key={index}
                    className='text-sm font-semibold text-blue-500'
                  >
                    {section.text}
                  </Link>
                );
              }
              if (section.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className='text-gray-700 lg:text-md leading-relaxed'
                  >
                    {section.text}
                  </p>
                );
              }
              if (section.type === 'list') {
                return (
                  <ul
                    key={index}
                    className='list-disc list-outside text-gray-700 px-4'
                  >
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div>
          <RecentPost recentPosts={recentPosts} />
        </div>
      </div>
    </>
  );
};

export default BlogDetals;
