import React from 'react';

const BlogPage = ({ title, author, date, content }) => {
  return (
    <div className="blog-page-container mx-auto max-w-3xl p-4">
      {/* Blog Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="text-sm text-gray-600">
          <p>By {author}</p>
          <p>{date}</p>
        </div>
      </header>

      <article className="prose prose-lg text-gray-800">
        {content}
      </article>
    </div>
  );
};

export default BlogPage;
