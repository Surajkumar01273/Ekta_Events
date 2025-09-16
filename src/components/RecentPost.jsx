import React from 'react'
import { Link } from 'react-router-dom'

const RecentPost = ({recentPosts}) => {
  return (
    <div>
       <h2 className="text-xl md:text-3xl font-bold mb-4">Recent Post</h2>
        <div className="space-y-3">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="border-b pb-2 text-red-600 hover:text-red-800 text-sm cursor-pointer"
            >
              <Link to={post.link}>
              {post.text}
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default RecentPost
