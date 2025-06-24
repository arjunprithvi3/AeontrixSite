import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const blogData = [
  { id: 1, title: 'How AI is Transforming Retail', content: 'Full article content for Retail blog...' },
  { id: 2, title: 'AI in Healthcare: Opportunities & Challenges', content: 'Full article content for Healthcare blog...' },
  { id: 3, title: 'Finance Gets Smarter with AI', content: 'Full article content for Finance blog...' },
  { id: 4, title: 'AI for Small Businesses', content: 'Full article content for Small Business blog...' },
  { id: 5, title: 'AI and Education: The Future of Learning', content: 'Full article content for Education blog...' },
  { id: 6, title: 'Manufacturing with AI: Smarter Production', content: 'Full article content for Manufacturing blog...' },
  { id: 7, title: 'Real Estate and AI: Smarter Investments', content: 'Full article content for Real Estate blog...' },
  { id: 8, title: 'AI for Customer Service', content: 'Full article content for Customer Service blog...' },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) return <div>Blog not found.</div>;

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '12px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '900px', marginTop: '20px' }}>
        <Button variant="outline-dark" onClick={() => navigate('/all-blogs')} className="mb-4">&larr; Back to Blogs</Button>
        <h1 className="fw-bold mb-4">{blog.title}</h1>
        <div style={{ color: '#444', fontSize: '1.1rem', lineHeight: '1.7' }}>{blog.content}</div>
      </Container>
    </div>
  );
};

export default BlogDetails; 