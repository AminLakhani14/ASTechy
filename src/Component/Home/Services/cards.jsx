import React from 'react';
import './Card.css'; 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ReactCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div><ArrowForwardIcon /></div>
    </div>
  );
};

export const CardList = ({ cardData }) => {
  return (
    <div className="card-list">
      {cardData.map((data, index) => (
        <ReactCard key={index} title={data.title} description={data.description} />
      ))}
    </div>
  );
};