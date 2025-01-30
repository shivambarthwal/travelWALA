"use client"
import Link from 'next/link';
import { AppAssets } from '../../constants/assets';
import SplashCursor from '../../components/SplashCursor';
import Image from 'next/image';

const blogs = [
  {
    slug: 'most-visited-places-2024',
    title: 'Most Visited Places in the World - 2024',
    description: 'Explore the top destinations travelers are flocking to this year.',
    date: 'December 21, 2024',
    image: AppAssets.most_visited,
  },
  {
    slug: 'hidden-gems-travel',
    title: 'Hidden Gems to Explore in 2024',
    description: 'Discover underrated travel destinations that you should not miss.',
    date: 'December 15, 2024',
    image: '/images/hidden-gems.jpg',
  },
  {
    slug: 'sustainable-tourism',
    title: 'Sustainable Tourism: How to Travel Responsibly',
    description: 'Learn about sustainable travel practices and eco-friendly destinations.',
    date: 'December 10, 2024',
    image: '/images/sustainable-tourism.jpg',
  },
  {
    slug: 'best-beaches-in-2024',
    title: 'Best Beaches to Visit in 2024',
    description: 'Check out the most breathtaking beaches for a perfect getaway.',
    date: 'December 5, 2024',
    image: '/images/best-beaches.jpg',
  },
  {
    slug: 'top-countries-for-adventure',
    title: 'Top Countries for Adventure Travel in 2024',
    description: 'Experience the thrill of adventure travel in these countries.',
    date: 'December 2, 2024',
    image: '/images/adventure-travel.jpg',
  },
  {
    slug: 'luxury-travel-2024',
    title: 'Luxury Travel Trends in 2024',
    description: 'Indulge in the most luxurious destinations and experiences this year.',
    date: 'November 28, 2024',
    image: '/images/luxury-travel.jpg',
  },
];
const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SplashCursor/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10">
          Explore Our Latest Travel Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white cursor-pointer rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Image
                 src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{blog.date}</p>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <Link href={`/blogs/${blog.slug}`}>
                  <p className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
