import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Contact() {
  return (
    <div className="content-section grid-background"
      style={{
       
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}
    >
      <div className="content-box highlighted-box"
        style={{
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "1200px",
          padding: "40px",
          height:'150%'
        }}
      >
        <Row>
          {/* Left Side Text */}
          <Col md={6} style={{ paddingRight: "40px" }}>
            <h2 style={{ fontWeight: "600" }}>Ready to Upgrade Your Workforce?</h2>
            <p style={{ color: "#555", marginTop: "20px" }}>
              Fill out the form to schedule a demo and see how our AI employees can transform your business. Our experts will create a custom implementation plan for your organization.
            </p>

            <ul style={{ paddingLeft: "20px", marginTop: "30px", color: "#222" }}>
              <li style={{ marginBottom: "12px" }}> Free workforce efficiency analysis</li>
              <li style={{ marginBottom: "12px" }}>Custom AI implementation roadmap</li>
              <li>30-day free trial of your first AI employee</li>
            </ul>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" style={{width:'70%'}}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" style={{width:'70%'}}>
                <Form.Label>Work Email</Form.Label>
                <Form.Control type="email" placeholder="abc@company.com" />
              </Form.Group>

              <Form.Group className="mb-3" style={{ width: '70%' }}>
                <Form.Label>Mobile Number</Form.Label>
                <PhoneInput
                    country={'in'} 
                    inputStyle={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '4px',
                    border: '1px solid #ced4da',
                    }}
                    containerStyle={{ width: '100%' }}
                    placeholder="Enter mobile number"
                    inputProps={{   
                    name: 'phone',
                    required: true,
                    }}
                />
                </Form.Group>

                <Form.Group className="mb-3" style={{width:'70%',height:'100px'}}>
                <Form.Label>Business</Form.Label>
                <Form.Control type="textarea" placeholder="Brief description about your business"  style={{height:'100px'}} />
              </Form.Group>
              <br></br><br></br>

             <Button
                variant="dark" type="submit" style={{width:"70%",padding:"12px",fontWeight: "500",borderRadius: "8px",bottom:'50px'}}>
                Submit
              </Button>

              
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
