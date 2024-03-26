import React from 'react';
import './Card.css';
import EastOutlined from '@mui/icons-material/EastOutlined';
import { useNavigate } from 'react-router-dom';
const ReactCard = ({ title, description, index, color, route, textColor }) => {
  const navigate = useNavigate();
  const openServices = () => {
    navigate(route);
  };
  return (
    <div className={'card'} style={{ backgroundColor: color, color: textColor }}>
      <div className="card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>{title}</h2>
          <h5 style={{ marginTop: '6px', color: '#F0F0F0' }}>{index}</h5>
        </div>
        <p className='maincarddesc'>{description}</p>
        <div style={{ textAlign: 'left' }} className='Arrow' onClick={openServices}><EastOutlined fontSize='large' /></div>
      </div>
    </div>
  );
};

export const CardList = ({ cardData }) => {
  return (
    <div className="card-list">
      {cardData.map((data, index) => (
        <ReactCard
          key={index}
          title={data.title}
          description={data.description}
          index={data.index}
          textColor={data?.textColor}
          color={data.color}
          route={data.route}
        />
      ))}
    </div>
  );
};