import React from 'react';

interface Blog {
  title: string;
  description: string;
  hashTags: string[];
}

const blogs: Blog[] = [
  {
    title: 'How Astrophotography changed my life?',
    description: 'Astrophotography opened up a new world for me, merging my love for astronomy and photography into a single passion. Through the lens of my camera, I’ve captured breathtaking images of celestial bodies, learned patience, and developed a deeper appreciation for the universe. This journey has also connected me with a community of like-minded enthusiasts who inspire and support each other.',
    hashTags: ["#photography", '#astronomy', '#astrophotography', '+']
  },
  {
    title: 'Which Telescope and DSLR I use?',
    description: 'Choosing the right equipment is crucial for astrophotography. In this blog, I detail the specific telescope and DSLR camera I use to capture stunning images of the night sky. I discuss the features that make these tools ideal for my needs, the challenges I faced while selecting them, and tips for anyone looking to start their own astrophotography journey.',
    hashTags: ["#photography", '#astronomy', '#astrophotography', '+']
  }
];

const Blog: React.FC = () => {
  return (
    <div className='space-y-4'>
      {blogs.map((blog, index) => (
        <div key={index} className='bg-base-300 p-4 rounded-3xl'>
          <h2 className='text-3xl font-bold pb-3'>{blog.title}</h2>
          <p className='text-md text-gray-500'>{blog.description}</p>
          <div className='py-2 text-[#196AA0] flex justify-between'>
            <div className='flex flex-wrap gap-2 text-sm'>


            
            {blog.hashTags.map((tag, idx) => (
              <span key={idx} className='p-2 bg-white mx-1 rounded-xl '>{tag} </span>
            ))}</div>
            <p className='text-xl font-bold'>Read More</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;