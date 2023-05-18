import React from 'react';
import './Dashboard.css'; // Optional: Create a CSS file for custom styles
import { Card } from 'react-bootstrap';

const Dashboard = () => {
    return (
      <div className="dashboard">
        <h1>Welcome to the Dashboard</h1>
        <div className="detail">
          <Card>
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>
              The web application features an interactive homepage with smooth animations, a list of items with filtering and sorting options, and a dashboard to showcase skills and application features. It aims to provide an engaging user experience with seamless transitions and a user-friendly interface.
              </Card.Text>
            </Card.Body>
          </Card>
  
          <Card>
            <Card.Body>
              <Card.Title>Name: Aditi Jay Yadav</Card.Title>
              <Card.Text>
                Skills: React js, Html, CSS, Tailwind CSS, Javascrpit, React native, firebase, Java.
              </Card.Text>
            </Card.Body>
          </Card>
  
          {/* Add more cards for additional features */}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  