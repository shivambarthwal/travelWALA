import { notFound } from 'next/navigation';

const blogs = {
  'most-visited-places': {
    title: 'Most Visited Places in the World - 2024',
    date: 'December 21, 2024',
    content: (
      <>
        <h2>Paris, France</h2>
        <p>Paris is known for the Eiffel Tower, Louvre Museum, and its beautiful streets.</p>
        <h2>Bangkok, Thailand</h2>
        <p>Bangkok is a hub for culture, food, and shopping.</p>
      </>
    ),
  },
  'top-coding-languages': {
    title: 'Top Coding Languages to Learn in 2024',
    date: 'December 20, 2024',
    content: (
      <>
        <h2>JavaScript</h2>
        <p>JavaScript continues to be the most essential language for web development.</p>
        <h2>Python</h2>
        <p>Python is excellent for data science, AI, and web development.</p>
      </>
    ),
  },
};

export default function BlogPage({ params }) {
  const { slug } = params;
  const blog = blogs[slug];

  if (!blog) {
    notFound();  
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.date}</p>
      <div>{blog.content}</div>
    </div>
  );
}
