import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const videoData = [
  {
    title: 'Sales Demo',
    description: 'Watch AI handle complex sales negotiations and objection handling',
    src: '',
  },
  {
    title: 'Marketing Demo',
    description: 'See how AI creates and optimizes multi-channel campaigns',
    src: '',
  },
  {
    title: 'HR Demo',
    description: 'Experience AI-powered recruitment and employee management',
    src: '',
  },
  
];

function YoutubeVideos() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '8px', fontFamily: 'Poppins, sans-serif' }}>
      <Container className="py-4" style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.10)', maxWidth:'1350px' }}>
        <h4 className="fw mb-4 " >Live Robot Demonstrations</h4>
       

        <div
          style={{
            position: 'relative',
            backgroundColor: '#dcdcdc',
            height: '350px',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            overflow: 'hidden',
            border: '1px solid #e0e0e0',
            marginBottom: '24px',
            aspectRatio:'21/9',
            width:'90%',
            margin:'0 auto'
          }}
        >
          <video
            controls
            width="100%"
            height="100%"
            
            style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0', objectFit: 'cover' }}
            key={currentVideo.src}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '10px',
              borderRadius: '0 0 12px 12px',
              
            }}
          >
            <strong>Demo:</strong> {currentVideo.title}
          </div>
        </div>

       <Row className="mt-4 justify-content-center">
        {videoData.map((video, index) => (
            <Col
            key={index}
            className="d-flex justify-content-center"
             style={{
            flex: '0 1 280px',
            maxWidth: '380px',
      }}
            
            
            >
      <Card
        onClick={() => setCurrentVideo(video)}
        style={{
          cursor: 'pointer',
          border:
            currentVideo.title === video.title
              ? '2px solid #0d6efd'
              : '1px solid #ccc',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          borderRadius: '20px',
          transition: 'box-shadow 0.2s',
          width: '100%',
          maxWidth: '300px',
          padding:'16px',
         
        }}
      >
        <Card.Body>
          <Card.Title>
            <i className="bi bi-briefcase-fill me-2"></i>
            {video.title}
          </Card.Title>
          <Card.Text>{video.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </div>
  );
}

export default YoutubeVideos;
